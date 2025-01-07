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


server.listen(app.get("port"), ()=>{
    console.log("Servidor iniciado en el puerto "+ app.get("port"));
})