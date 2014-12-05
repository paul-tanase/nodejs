var express = require('express');
var app = express(), server = require('http').createServer(app);
app.use('/', express.static('./'));
var port = process.env.OPENSHIFT_NODEJS_PORT || 8000
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
server.listen(port, ip);
