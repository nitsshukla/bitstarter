var express = require('express');
var app = express();
var fs  = require('fs');
app.use(express.logger());
var buffer = new Buffer(30);
fs.readFileSync('index.html',buffer);
app.get('/', function(request, response) {

response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
