console.log(__filename);
console.log(process.argv);
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log(add);
})
var os = require("os");
console.log(os.hostname());

let http = require("http");
var url = require('url');

var port = 3000;
var serverUrl = "localhost";
var server = http.createServer(function(req, res) {
    var html = `<p>Just text</p>`
    console.log(`Client IP is : ${getClientIP(req)}`);
    console.log(`Protocol: ${req.headers.referer}`);
    console.log(`Protocol version: ${req.httpVersion}`);
    var url_parts = url.parse(req.url, true);
    console.log(url_parts);
    var query = url_parts.query.toSting();
    console.log(query);
    res.end(html);
});

server.listen(port, serverUrl);

function getClientIP(req){
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}
