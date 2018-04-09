/*
var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.write('Hello world');
    response.end();
});
server.listen(9000);
*/
/*
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(8080);
*/
var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response){
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/index.html'){
		fs.readFile('./index.html', function(err, data){
			if (err) throw err;
			response.write(data);
			response.end();
		});
	} else {
		response.write('<img src="https://i1.kwejk.pl/k/obrazki/2012/11/403fb3ab557a0a6080d9c4bb150c9a1b_original.jpg"/>');
		response.end();
	}

});
server.listen(8080);