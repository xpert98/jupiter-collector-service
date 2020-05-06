require('dotenv').config();

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var inventoryItem = require('./routes/inventoryItemRoute');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/inventoryItem', inventoryItem);

module.exports = app;