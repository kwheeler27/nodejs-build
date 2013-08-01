var http = require('http');
var url = require('url');

function serverLaunch() {
    http.createServer(function(request, response) {
	console.log("request received");
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("Hello World");
	response.end();
    }).listen(8888);

    console.log("Server has started");
}

exports.serverLaunch = serverLaunch;

