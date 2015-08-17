//var http = require("http");
var fs = require("fs");
var data = fs.readFileSync("file.txt", "txt");
console.log(data);

//http.createServer(function(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}).listen(8888);
console.log("continue execution");