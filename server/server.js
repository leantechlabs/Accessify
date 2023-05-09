import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const Axios = require("axios")
const multer = require('multer');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require('path');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'accesify'
})

const salt = 10;  //hashing password length

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true

    })
);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

function message(props) {
    console.log(props);
}


// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		if (file.fieldname === '_logo') {
// 			cb(null,path.join(__dirname, '/uploads/logos') );
// 		  } else if (file.fieldname === '_userFile') {
// 			cb(null, path.join(__dirname, '/uploads/files'));
// 		  }else {
// 			cb(new Error('Invalid field name'));
// 		  }
// 	},
// 	filename: (req, file, cb) => {
// 		console.log(file);
// 		cb(null, file.originalname+ '-' + Date.now() + path.extname(file.originalname));
// 	}
	
// });
// const upload = multer({
// 	dest: 'uploads/' 
// });

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
	  callback(null, "uploads");
	},
	filename: (req, file, callback) => {
	  callback(null,file.originalname+ '-' + Date.now() + path.extname(file.originalname));
	},
  });
  const imageStorage = multer.diskStorage({
	destination: (req, file, callback) => {
	  callback(null, "images");
	},
	filename: (req, file, callback) => {
	  callback(null, file.originalname+ '-' + Date.now() + path.extname(file.originalname));
	},
  });
const upload = multer({ storage }).single("file");
const imageUpload = multer({ storage: imageStorage }).single("image");
// connection.connect(function(err){
//   if(err) throw err;
//   console.log("connected database");
// });

// Regular expressions for validation
const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const zipRegex = /^\d{5}$/;
const countryRegex = /^[a-zA-Z\s]+$/;
const allowedTypes = /jpeg|jpg|png|gif/;


// Validation functions
function validateFullName(fullName) {
	const trimmedFullName = fullName.trim();
	return nameRegex.test(trimmedFullName);
}
function validateEmail(email) {
	return emailRegex.test(email);
}
function validatePhoneNumber(phoneNumber) {
	return phoneRegex.test(phoneNumber);
}
function validateZipCode(zipCode) {
  return zipRegex.test(zipCode);
}
function validateCountry(country) {
	return countryRegex.test(country);
}
function validateFileType(fileType) {
	return allowedTypes.test(fileType);
}


const verifyUser = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json({Error:"You are not Authenticated"})
    }else{
        jwt.verify(token, "jwt-secret-key", (err, decoded)=>{
            if(err){
                return res.json({Error:"Token is not matched"})
            }else{
                req.name = decoded.name;
                next();
            }
        })
    }
}

app.get('/',verifyUser,(req,res)=>{
    return res.json({Status: "Success", name:req.name});
})


app.post('/register', (req,res)=>{
    const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)"; 
    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
        if(err) return res.json({Error:"Error for hashing password"})
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err,result)=>{
            if(err) return res.json({Error: "Inserting data error"});
            return res.json({Status: "Success"});
        })
    })
    
})



app.get('/login', (req, res) => {
    res.send('This has CORS enabled ')
})


app.post('/login',(req, res) =>{
	const sql = "SELECT * FROM users WHERE email = ? ";
    db.query(sql,[req.body.email],(err,data)=>{
        if(err) return res.json({Error: "Login error in server"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password,(err,response)=>{
                if(err) return res.json({Error: "Password compare error"});
                if(response){
                    const name =data[0].name;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success"});
                }else{
                    return res.json({Error: "Wrong password"});
                }
            })
        }else{
            return res.json({Error:"No email exist"});
        }
    })
});

app.post('/multiuser', (req, res) => {
	upload(req, res, (error) => {
		if (error) {
		  console.log(error);
		  return res.sendStatus(500);
		}
	
		console.log("Upload successful!",req.body);
		res.sendStatus(200);
	  });
});

app.post('/institutionuser', (req, res) => {
	const {firstname,lastname,email,mobile,regid,password,Institution,BatchYear,Batch,AccessPeriod} = req.body;
	console.log(req.body,firstname,lastname,email,mobile,regid,password,Institution,BatchYear,Batch,AccessPeriod);
});

app.get('/institution', (req, res) => {
    const { institutionName, headOfInstitution, primaryEmail, primaryContact, secondaryEmail, secondaryContact, address, city, state, institutionCode, institutionType, password } = req.body;
    console.log(req.body); // log the request body to the console
    // process the data and send a response    
  });

app.post('/institution', (req, res) => {
    
    const sql = "INSERT INTO institutions (`institutionName`,`headOfInstitution`,`primaryEmail`,`primaryContact`,`secondaryEmail`,`secondaryContact`,`address`,`city`,`state`,`instituteCode`,`instituteType`,`password`) VALUES (?)";  
    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
        if(err) return res.json({Error:"Error for hashing password"})
        const values = [
            req.body.institutionName,
            req.body.headOfInstitution,
            req.body.primaryEmail,
            req.body.primaryContact,
            req.body.secondaryEmail,
            req.body.secondaryContact,
            req.body.address,
            req.body.city,
            req.body.state,
            req.body.instituteCode,
            req.body.instituteType,  
            hash
        ]
        db.query(sql, [values], (err,result)=>{
            if(err) return res.json({Error: "Inserting data error"});
            return res.json({Status: "Success"});
        })
    })
});


//   app.post('/register',(req, res) => {

//     imageUpload(req, res, (error) => {
// 		if (error) {
// 		  console.log(error);
// 		  return res.sendStatus(500);
// 		}
// 		console.log("Upload successful!");
  
// 	const { name,email,businessname,phone,address,state,city,zip,language } = req.body;

// 	console.log(req.body ,name,email,businessname,phone,address,state,city,zip,language);

// 	});
//   });


app.get('/institutions',(req,res) =>{
    const sql="SELECT * FROM institutions";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result)
    })
})

  app.get('/logout',(req,res) =>{
    res.clearCookie('token');
    return res.json({Status: "Success"})
	
})

app.listen(3001, () => {
    console.log("running server port 3001");
});
