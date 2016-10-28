var http = require("http");

var server = http.createServer(function(res,req) {
	console.log(res);
});

server.listen(80, function(){
	console.log("server listening on port 80");
})