var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync('index.html');

var cadena = buffer.toString('utf-8');

app.get('/', function(request, response) {
    response.send(cadena);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
