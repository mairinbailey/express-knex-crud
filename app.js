var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
require('dotenv').config();

//require our routes file(s)
var routes = require('./routes/puppy');
//invoke express
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/', routes)


app.listen(3000, function(){
  console.log('Listening on port 3000');
});

module.exports = app;
