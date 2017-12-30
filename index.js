// requiring the HTTP interfaces in node
var http = require('http');

//Creating and http server to handle requests and response
http.createServer(function (req, res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World. I am here');
}).listen(8080);

console.log('Server running on port:8080'); 