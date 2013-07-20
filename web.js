var express = require('express');
var app = express();
var fs  = require('fs');
app.use(express.logger());
var buffer = new Buffer(30);
buffer=fs.readFileSync('index.html','utf-8');
app.get('/', function(request, response) {

response.send(buffer.toString('ascii',0,27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
