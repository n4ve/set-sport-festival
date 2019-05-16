// Fast html framework
var express = require('express');
var app = express();
 
// For receiving JSON in posts
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// For the database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/set-festival.db');
 
// Add restful controller
require('./ScoreController')(app, db, jsonParser);
 
// Serve static files
app.use(express.static('wwwroot'))
 
app.listen(3000);
