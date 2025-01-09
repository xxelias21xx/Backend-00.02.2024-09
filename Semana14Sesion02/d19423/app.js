require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = socketIO(server);
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

const OpenAI = require('openai')
const openai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY
})


io.on("connection",(socket)=>{
    console.log("Nuevo usuario conectado")
    socket.on("sendMessage", (message, callback)=>{
        try {
            console.log(message);
            socket.emit("message", message);
            callback();
        } catch (error) {
            console.log(error);
        }
    })
    socket.on("disconnect", ()=>{console.log("Usuario Desconectado")})
})




server.listen(PORT, ()=>{
    console.log(`Corriendo en el puerto ${PORT}`)
})



