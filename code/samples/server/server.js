var connect = require('connect');
var http = require('http');

connect()
    .use(connect.static("/path"))
    .listen(3001);
	