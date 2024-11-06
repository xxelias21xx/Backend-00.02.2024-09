//Esta línea importa el módulo http
let server = require("http");
//definimos el puerto que vamos a usar
let port = 3000;
var moment = require('moment'); // require

//creamos un servidor con el http y usamos createserver()
server.createServer(function(req, res){//le pasamos una funcion para que nos de una resuesta
    console.log(moment().format())
    res.end("Hola desde mi app en nodejs "+ moment().format("[Today is] dddd") )
}).listen(port); // aqui usamos listen() para decirle que el servidor usara o escuchara el puerto 3000
//pasamos la varaible port
