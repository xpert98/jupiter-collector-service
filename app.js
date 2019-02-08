var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db');

var software = require('./routes/softwareRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/software', software);

module.exports = app;