import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


import Axios  from "axios";
import session from "express-session";
import { randomInt } from 'crypto'

const app = express();
//database
const db = mysql.createConnection({

    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'accesify'

    // host: 'sql.freedb.tech',
    // user: 'freedb_accessify',
    // password: '!AzjRVUJA@Y&Q3e',
    // database: 'freedb_accessify'

    host: 'srv984.hstgr.io',
    user: 'u734900206_accessify',
    password: 'LeantechLabs@8861',
    database: 'u734900206_accessify'
})

// if(db.connect()){console.log('Connected to db')}else{console.log('Not Connected')}
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


const upload = multer({ dest: "uploads/" });
const imageUpload = multer({ dest: "images/" });


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
app.get('/users',(req,res)=>{
  const sql = "SELECT * FROM users ";
  return res.json({Status: "Success",sql})
})
//comments

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

// app.post('/multiuser', (req, res) => {
//     const sql = `INSERT INTO multi_user (Institution, BatchYear, Batch, AccessPeriod, file) VALUES (?, ?, ?, ?, ?)`;  
// console.log(req.body);
//     const { Institution, BatchYear, Batch, AccessPeriod } = req.body;
//     console.log("h");
//     const { filename } = req.file.filename;
//     console.log("h");

//     const queryValues = [Institution, BatchYear, Batch, AccessPeriod, filename];
//     // const values = [
//     //     req.body.Institution,
//     //     req.body.BatchYear,
//     //     req.body.Batch,
//     //     req.body.AccessPeriod,
//     //     req.file
//     // ]
// 	upload(req, res, (error) => {
// 		if (error) {
// 		  console.log(error);   
// 		  return res.sendStatus(500);
// 		}
//         console.log("h",req.body,Institution,BatchYear,Batch,AccessPeriod,filename,path);
//       db.query(sql, queryValues, (err,result)=>{
//         if(err) {
//             return res.json({Error: "Inserting data error"});
//         }else {
//             console.log("Upload successful!",req.body,req.file);
//             return res.json({Status: "Success"});
//         }
//     });
// });

// });


app.post("/multiuser", upload.single("file"), (req, res) => {
    const { Institution, BatchYear, Batch, AccessPeriod } = req.body;
    const filename = req.file.originalname;
    const sql = `INSERT INTO multi_user (Institution, BatchYear, Batch, AccessPeriod, file) VALUES (?, ?, ?, ?, ?)`;
    const queryValues = [Institution, BatchYear, Batch, AccessPeriod, filename];
    console.log(queryValues);
    db.query(sql, queryValues, (err, result) => {
      if (err) {
        console.log("h",err);
        return res.status(500).json({ error: "Inserting data error" });
      } else {
        console.log("Upload successful!", req.body, req.file);
        return res.status(200).json({ status: "Success" });

      }
    });
  });


app.get('/users/:institution/:batchYear/:batch', (req, res) => {    
    const { institution, batchYear, batch } = req.params;

    let sql = "SELECT * FROM users";
    console.log("h");
    if (institution) {
    const sql = `SELECT * FROM users WHERE institution = ? AND batchYear = ? AND batch = ?`;
    const values = [institution, batchYear, batch];
      }
      db.query(sql, values, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
        } else {
          res.json(result);
          console.log(result);
        }
      });
});
app.post('/institution-single-user', (req, res) => {
    const sql = "INSERT INTO `single-user` (`Institution`,`BatchYear`,`Batch`,`firstname`,`lastname`,`email`,`regid`,`mobile`,`password`,`AccessPeriod`) VALUES (?)";  

    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
        if(err) return res.json({Error:"Error for hashing password"})
    const values = [
        req.body.Institution,
        req.body.BatchYear,
        req.body.Batch,
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.regid,
        req.body.mobile,
        hash,
        req.body.AccessPeriod
    ]	
    console.log(req.body,);
    db.query(sql, [values], (err,result)=>{
        if(err){ 
            console.log(err);
            return res.json({Error: "Inserting data error"});
    }else{
        return res.json({Status: "Success"});
    }
    })
})
});


app.get('/institution',(req,res) =>{
  const sql="SELECT * FROM institutions";
  
  db.query(sql,(err,result)=>{
      if(err){
        console.log(err);
        return res.json({Message: "Error inside server"});
      } 
      return res.json(result)
  })
})

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

app.post('/batch', (req, res) => {
    const sql = "INSERT INTO batch (`institution`,`BatchYear`,`Batchname`) VALUES (?)";  

    const values = [
        req.body.institution,
        req.body.BatchYear,
        req.body.Batchname,
    ]	
    console.log(req.body);
    db.query(sql, [values], (err,result)=>{
        if(err){ 
            console.log(err);
            return res.json({Error: "Inserting data error"});
    }else{
        return res.json({Status: "Success"});
    }
    })
});

app.post('/createBatchyears', (req, res) => {    
    const sql = "INSERT INTO Batchyears (`createinstitution`,`createBatchyear`) VALUES (?)";  

const values = [
    req.body.createInstitution,
    req.body.createBatchyear
]	
console.log(req.body,req.body.createInstitution,req.body.createBatchyear);
db.query(sql, [values], (err,result)=>{
    if(err) return res.json({Error: "Inserting data error"});
    return res.json({Status: "Success"});
})

});


app.get('/batchyears/:selectInstitution?', (req, res) => {
    const { selectInstitution } = req.params;
    let sql = "SELECT * FROM Batchyears";
    console.log("h");

    if (selectInstitution) {
      sql += ` WHERE createinstitution = '${selectInstitution}'`;
      console.log("hh");

    }
  
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(result);
      }
    });
  });
  
// app.get('/batchyearshh', (req, res) => {

//     let sql = "SELECT * FROM Batchyears";
//     console.log("h");

//     if (req.params.selectInstitution) {
//         const selectedInstitution = req.params.selectInstitution;
//         sql = `SELECT * FROM batch WHERE institution = '${selectedInstitution}'`;
//         console.log("hh");

//       }
    
    
//       db.query(sql, (err, result) => {
//         if (err) {
//             console.log("hhh");

//           console.log(err);
//           res.status(500).send("Internal Server Error");
//         } else {
//           res.json(result);
//           console.log("hhhh");

//         }
//       });
//     });

// app.get('/batchs',(req,res) =>{
//     const sql="SELECT * FROM batch";
//     db.query(sql,(err,result)=>{
//         if(err) console.log("l",err);

//         res.json(result);
//         });
// });

app.get('/batchs/:selectInstitution?', (req, res) => {
    const { selectInstitution } = req.params;
    let sql = "SELECT * FROM batch";

    if (selectInstitution) {
      sql += ` WHERE institution = '${selectInstitution}'`;
    }
  
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(result);
      }
    });
  });
  app.get('/categories',(req,res) =>{
    const sql="SELECT * FROM categories";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result)
    })
  })

  app.post('/categorie', (req, res) => {
    const sql = "INSERT INTO categories (`name`,`description`,`tag`,`accessType`,`accessPlan`,`display`) VALUES (?)";  

    const values = [
        req.body.name,
        req.body.description,
        req.body.tag,
        req.body.accessType,
        req.body.accessPlan,
        req.body.display

    ]	
    console.log(req.body);
    db.query(sql, [values], (err,result)=>{
        if(err){ 
            console.log(err);
            return res.json({Error: "Inserting data error"});
    }else{
        return res.json({Status: "Success"});
    }
    })
});


// app.get('/batchs/:selectInstitution', (req, res) => {
//     const selectedInstitution = req.params.selectInstitution;

//   const sql = `SELECT * FROM batch WHERE institution = '${selectedInstitution}'`;

//   db.query(sql, (err, result) => {
//     if (err) console.log(err);

//     res.send(result);
//   });
// });

// app.get('/vendor-register', (req, res) => {
//     res.send('This has CORS enabled ')
// })
app.get('/manage-vendor',(req,res)=>{
    let sql = "SELECT uid,name,email,businessname,phone,address,state,city,zip,language,pass FROM vendor";
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(result);
      }
    });
})

  app.post('/update-vendor',(req, res) => {
	const {uid, name,email,businessname,phone,address,state,city,zip,language,pass } = req.body;
    console.log(req.body);
    const sql = `UPDATE vendor SET 
    name = '${name}',
    email = '${email}',
    businessname = '${businessname}',
    phone = '${phone}',
    address = '${address}',
    state = '${state}',
    city = '${city}',
    zip = '${zip}',
    language = '${language}',
    pass = '${pass}'
    WHERE uid = ${uid}`; 
    db.query(sql, (err, result) => { 
        if (err){
            console.log(err)
            return res.json({Error: "Something Went Wrong"});
        }
        else {
            return res.json({Error: "Vendor Updated Successfully"});
        }
    });

  });

  app.post('/vendor-register',(req, res) => {
	const { name,email,businessname,phone,address,state,city,zip,language,password } = req.body;
    const sql = `INSERT INTO vendor (name,email,businessname,phone,address,state,city,zip,language,pass) 
    VALUES ('${name}',
    '${email}',
    '${businessname}',
    '${phone}',
    '${address}',
    '${state}',
    '${city}',
    '${zip}',
    '${language}',
    '${password}')`;
    db.query(sql, (err, result) => { 
        if (err){
            return res.json({Error: "Something Went Wrong"});
        }
        else {
            return res.json({Error: "Success"});
        }
    });

  });

  app.get('/logout',(req,res) =>{
    res.clearCookie('token');
    return res.json({Status: "Success"})
	
})

app.listen(3001, () => {
    console.log("running server port 3001");
});

