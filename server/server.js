
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const Axios = require("axios")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

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

connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
  
    console.log('Database Connected');
  });
  
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

app.listen(3001, () => {
    console.log("running server");
});
