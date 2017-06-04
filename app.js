var express = require("express");
var app = express();
var path = require('path');
var public = __dirname + "/public/";
var cities = require('./routes/cities');

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(__dirname + '/public'));


app.use('/cities', cities);

module.exports = app;