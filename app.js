var express = require("express");
var app = express();
var path = require('path');
var EventEmitter = require('events').EventEmitter;
var cities = require('./route /cities');


app.use('/cities', cities);

module.exports = app;
