var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = path.resolve(__dirname, '../client');
var port = 8080;
var server = express();

server.use('/', express.static(app));
server.use(bodyParser.json());

// Mock HTTP verbs here (get, post etc)...

server.listen(port, function() {
  console.log('Server running like a BOSS in port ' + port);
});
