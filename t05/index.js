//for normal

var normal = require("./normal-router");
let time = normal().split("-");
var http = require("http");
var port = 3000;
var serverUrl = "localhost";

var server = http.createServer(function(req, res) {

    console.log("Request:" + req.url);

    var now = new Date();
    var html = `<p>In real life you were absent for ${time[0]} years, ${time[1]} months, ${time[2]} days..</p>`
    res.end(html);
});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port, serverUrl);

//for quantum

// var quantum = require("./quantum-router");
// let time = quantum();
// var http = require("http");
// var port = 3000;
// var serverUrl = "localhost";

// var server = http.createServer(function(req, res) {

//     console.log("Request:" + req.url);

//     var now = new Date();
//     var html = `<p>In real life you were absent for ${time[0]} years, ${time[1]} months, ${time[2]} days..</p>`
//     res.end(html);
// });

// console.log("Listening at " + serverUrl + ":" + port);
// server.listen(port, serverUrl);