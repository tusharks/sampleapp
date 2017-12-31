// requiring the HTTPS interfaces in node
var http = require('https');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//Creating and http server to handle requests and response
http.createServer(function (req, res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World. I am here');
}).listen(port);
// app.get("/",function(req,res){
// 	res.send("Welcome to Node JS on Heroku");	
// });
// app.listen(port);
console.log('Server running on port:',port); 