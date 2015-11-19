var exports = module.exports = {};

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var mockServer = express();
var testAppDir = path.resolve(__dirname, '../app');
var port = 8080;

// Mock HTTP verbs here (get, post etc)...

mockServer.use('/', express.static(testAppDir));
mockServer.use(bodyParser.json());
mockServer.listen(port, function() {
  console.log('Server running like a BOSS in port ' + port);
});

exports.mockServer = mockServer;
