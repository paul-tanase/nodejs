/*var express = require('express');
var app = express(), server = require('http').createServer(app);
app.use('/', express.static('./'));
var port = process.env.OPENSHIFT_NODEJS_PORT || 8000
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
server.listen(port, ip);*/

var http = require('http');
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || '8080';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, ip);
console.log('Server running at http://'+ip+':'+port+'/');
