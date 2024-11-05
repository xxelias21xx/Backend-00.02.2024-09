let server = require("http");
let port = 3000;
var moment = require('moment'); // require

server.createServer(function(req, res){
    console.log(moment().format())
    res.end("Hola desde mi app en nodejs "+ moment().format("[Today is] dddd") )
}).listen(port);