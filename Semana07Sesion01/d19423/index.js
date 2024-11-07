let server = require("http");
let port = 3000;
var moment = require('moment'); // require
let fecha = require('./miModulo')
let fs = require('fs');
var url = require('url');

server.createServer(function(req, res){
    // console.log(moment().format())
    // console.log(req.url);


    if(req.url === "/clima"){
        res.end("Esta haciendo frio");
    }
    if(req.url=== "/tv"){
        fs.readFile("tv.html",function(error, data){
            res.write(data);
            res.end();
        })
    }
    if(req.url === "/pregunta/"){
        var q = url.parse(req.url, true);
        console.log(q)
        res.end();
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/text'});
        res.end("<h1>Hola desde mi app en nodejs "+ moment().format("[Today is] dddd") + " " + fecha.miFecha()+"</h1>" )
    }

}).listen(port);