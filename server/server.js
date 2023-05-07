
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
// const connection = mysql.createConnection({
// 	host     : 'sql984.main-hosting.eu',
// 	user     : 'u734900206_accessify',
// 	password : 'Accessify@123',
// 	database : 'u734900206_accessify',
// 	reconnect: true,
// 	wait_timeout: 3600,
// 	connectTimeout: 200000 // set timeout to 2 min

// });
const connection = mysql.createConnection({
	host     : 'sql.freedb.tech',
	user     : 'freedb_accessify',
	password : 'C!x2yZZzpzYgMaj',
	database : 'freedb_accessify',
	reconnect: true,
	wait_timeout: 3600,
	connectTimeout: 200000 // set timeout to 2 mins

});

// connection.connect(function(err) {
//     if (err) {
//       console.error('Error connecting to MySQL database: ' + err.stack);
//       return;
//     }
  
//     console.log('Database Connected');
//   });
  
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



app.get('/login', (req, res) => {
    res.send('This has CORS enabled ')
})

app.post('/login',(req, res) =>{
	let email = req.body._email;
	let password = req.body._password;
	console.log(req.body);
		connection.query('SELECT * FROM role_user WHERE _email = ? AND _password = ?', [email, password],
		 (error, results, fields)=>{

			if (error){ console.log(error);}
			else{
			if (results.length > 0) {
			
                res.send({message:'success'});
			} else {
				res.send({message:'success'});
                console.log(results);

			}		
			}
  			// close the connection
  			connection.end((error) => {
    		if (error) {
      			console.error('MySQL end error', error);
   			 } else {
      		console.log('MySQL connection closed');
    		}
  			});
			});
	
	
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


app.post('/users', (req, res) => {
	const { Institution,Batchyear,Batch} = req.body;
	console.log(req.body,Institution,Batchyear,Batch);

});
app.post('/institutionuser', (req, res) => {
	const {firstname,lastname,email,mobile,regid,password,Institution,BatchYear,Batch,AccessPeriod} = req.body;
	console.log(req.body,firstname,lastname,email,mobile,regid,password,Institution,BatchYear,Batch,AccessPeriod);
});
app.post('/institution', (req, res) => {
	const { institutionName,headofinstitution,primarycontact,primaryemail,secondarycontact,secondaryemail,address,institutioncode,state,city,password,InstitutionType} = req.body;
	console.log(req.body,institutionName,headofinstitution,primarycontact,primaryemail,secondarycontact,secondaryemail,address,institutioncode,state,city,password,InstitutionType);
});

app.post('/batch', (req, res) => {
	const { Institution,Batchyear,Batchname} = req.body;
	console.log(req.body,Institution,Batchyear,Batchname);
});

app.post('/createBatchyears', (req, res) => {
	const { createInstitution,createBatchyear} = req.body;
	console.log(req.body,createInstitution,createBatchyear);

});app.post('/Batchyears', (req, res) => {
	const { Institution} = req.body;
	console.log(req.body,Institution);

});

app.post('/batches', (req, res) => {
	const { SelectInstitution} = req.body;
	console.log(req.body,SelectInstitution);
});


// app.post('/register', upload.single('image'), (req, res) => {
// 	const { filename } = req.file;
// 	const fileExtension = path.extname(filename);
// 	const newName = `${filename}${fileExtension}`;
// 	const oldPath = `uploads/${filename}`;
  
// 	const { name,email,businessname,phone,address,state,city,zip,language } = req.body;

// 	console.log(req.body ,name,email,businessname,phone,address,state,city,zip,language);
// 	// move the file to the images folder with the new name
// 	// fs.rename(oldPath, newPath, (err) => {
// 	//   if (err) {
// 	// 	console.error(err);
// 	// 	res.status(500).json({ message: 'Failed to upload image' });
// 	//   } else {
// 	// 	console.log(`Image saved as ${newName}`);
// 	// 	res.json({ message: 'Image uploaded successfully' });
// 	//   }
// 	// });
//   });
  app.post('/register',(req, res) => {

    imageUpload(req, res, (error) => {
		if (error) {
		  console.log(error);
		  return res.sendStatus(500);
		}
		console.log("Upload successful!");
  
	const { name,email,businessname,phone,address,state,city,zip,language } = req.body;

	console.log(req.body ,name,email,businessname,phone,address,state,city,zip,language);

	});
  });

app.listen(3001, () => {
    console.log("running server");
});
