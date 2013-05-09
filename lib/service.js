var http = require('http');

var http_handle = function(req , res){
    res.writeHead(200 , {'Content-Type':"text/plain"});
    res.write('hello');
    res.end();
}

http.createServer(http_handle).listen(8080);

