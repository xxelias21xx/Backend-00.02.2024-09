//Esta línea importa el módulo http
let server = require("http");
//definimos el puerto que vamos a usar
let port = 3000;

//creamos un servidor con el http y usamos createserver()
server.createServer(function(req, res){//le pasamos una funcion para que nos de una resuesta
res.end("Hola desde mi app en nodejs")
}).listen(port); // aqui usamos listen() para decirle que el servidor usara o escuchara el puerto 3000
//pasamos la varaible port