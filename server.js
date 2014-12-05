var express = require('express');
var app = express();

app.use('/app', express.static('./static')).
app.listen(8080);
