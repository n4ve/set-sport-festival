// Fast html framework
var express = require('express');
var app = express();
var multer  = require('multer')
 
// For receiving JSON in posts
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = process.env.PORT || 5000;
 
// For the database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/set-festival.db');
var csv = require('fast-csv');

var upload = multer({ dest: 'uploads/' })

// set the view engine to ejs
app.set('view engine', 'ejs');
 
// Add restful controller
require('./ScoreController')(app, db, jsonParser);
require('./UploadScoreController')(app, db, csv, upload);

app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
  });


