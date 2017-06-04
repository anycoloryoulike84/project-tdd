var express = require("express");
var app = express();
var path = require('path');
var public = __dirname + "/public/";


app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public + "index.html"));
});

app.get('/cities', function(req, res) {
	var cities = ["city","ewewe","weds"]
	res.json(cities);
});

app.use('/', express.static(public));

module.exports = app;
// app.listen(8080)
