// Fast html framework
var express = require('express');
var app = express();
var multer  = require('multer')
 
// For receiving JSON in posts
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// For the database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/set-festival.db');
var csv = require('fast-csv');

var upload = multer({ dest: 'uploads/' })
 
// Add restful controller
require('./ScoreController')(app, db, jsonParser);
require('./UploadScoreController')(app, db, csv, upload);
 
// Serve static files
app.use(express.static(__dirname + 'wwwroot'));


console.log('Listening Port ' + process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);
