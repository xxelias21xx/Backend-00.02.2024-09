let server = require("http");
let port = 3000;

server.createServer(function(req, res){
res.end("Hola desde mi app en nodejs")
}).listen(port);