const express = require("express");
const path = require('path');
//const mysql = require('mysql');

// Initialize Express
const app = express();
app.use(express.static('static'));

/*const connection = mysql.createConnection({
  host     : "letterprojectdata.ckypvlfg0nlw.us-east-1.rds.amazonaws.com",
  user     : "masteruser",
  password : "letter4link",
  port     : "3306"
});


connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();*/

//app.use(express.static('/static', __dirname + '/static'));
//app.use(express.static(__dirname + '/static/View'));
//Store all HTML files in view folder.
//app.use(express.static(__dirname + '/static/Script'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){

  res.sendFile(__dirname + '/index2_withGrid.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/view2',function(req,res){
  res.sendFile('/index1_beforeGrid.html');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

console.log("Running on heroku");
