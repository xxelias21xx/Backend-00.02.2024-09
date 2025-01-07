const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.set("port", 8089);
app.use(express.static(path.join(__dirname, "./public")));

const server = require('http').Server(app);

const webSocketServer = require("websocket").server;
const wsServer = new webSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});




function originIsAllowed(origin){
    if(origin === "http://localhost:8089"){
        return true
    }
    return false;
}


wsServer.on("request",(request)=>{
    if(!originIsAllowed(request.origin)){
        request.reject();
        console.log(new Date()+" Conexion dek origen "+request.origin+" rechazada");
        return;
    }
    const connection = request.accept(null, request.origin);
    connection.on("message", (message)=>{
        console.log(message.utf8Data);
        connection.sendUTF(message.utf8Data);
    })
})

server.listen(app.get("port"), ()=>{
    console.log("Servidor iniciado en el puerto "+ app.get("port"));
})