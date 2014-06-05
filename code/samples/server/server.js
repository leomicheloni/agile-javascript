var connect = require('connect');
var http = require('http');

connect()
    .use(connect.static("C:/Code/agile-javascript/agile-javascript/code/samples/backbone"))
    .listen(3001);
	