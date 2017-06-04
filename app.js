var express = require('express');
var app = express();
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use(express.static(__dirname + '/public'));

var cities = require('./routes/cities');
app.use('/cities', cities);

module.exports = app;