var http = require("http");
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css"> button:hover + p {background-color: red}</style>\n' + 
    '\n\n<h1 style="text-align:center">What Thanos did for the Soul Stone?</h1>\n' + 
'<div id="content"><input type="radio" id="first" name="first" value="first"><label for="first">Jumped from the mountain</label><br><input type="radio" id="second" name="first" value="second"><label for="second">Made stone keeper to jump from the mountain</label><br><input type="radio" id="third" name="first" value="third"><label for="third">Pushed Gamora off the mountain</label></div>' + 
'<button id="button" style="margin-top:20px">I mad a choice!</button>' + '<p style="">Shame on you! Go and watch Avengers!</p>');
    res.end();
}).listen(8888, '127.0.0.1');
console.log("Server running");

// let button = document.querySelector(".button");
// console.log(button);
function forButton() {
    console.log(clicked);
}