// requiring the HTTPS interfaces in node
var https = require('https');

//Creating and http server to handle requests and response
https.createServer(function (req, res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World. I am here');
}).listen(8080);


console.log('Server running on port:8080'); 