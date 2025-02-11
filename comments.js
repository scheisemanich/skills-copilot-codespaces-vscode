// Create web server
// Run the server
// Open the browser
// Load the URL: http://localhost:3000/comments

// Load the http module
var http = require('http');

// Configure the HTTP server to respond with text
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello, World!\n");
});

// Listen on port 3000, IP defaults to