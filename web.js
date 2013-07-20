var express = require('express');
var app = express();
var fs  = require('fs');
app.use(express.logger());
var buffer = new Buffer("I'm a string!", "utf-8");
app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
