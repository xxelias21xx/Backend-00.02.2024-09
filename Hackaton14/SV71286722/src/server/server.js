import "dotenv/config"
import express from "express"
import { Server as SocketServer } from "socket.io"
import { createServer } from "node:http"

export class Server{
    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.server = createServer(this.app);
        this.io = new SocketServer(this.server, {
            connectionStateRecovery: {}
        })
        
        this.ioListen();
        this.routes();
    }

    routes(){

        this.app.get('/',(req, res)=>{
            res.sendFile(process.cwd() + '/src/client/index.html')
        })

        this.app.get('/ruta',(req, res)=>{
            res.json({message:"Prueba"})
        })

    }

    ioListen(){
        this.io.on('connection', async (socket) => {
            console.log('a user has connected!')

            socket.on('sendMessage', (msg)=>{
                console.log(msg)
                this.io.emit('message', `Servidor: ${msg}`)
            })
          
            socket.on('disconnect', () => {
              console.log('a user has disconnected')
            })
        })
    }

    listen(){
        this.server.listen(this.port,()=>{
            console.log(`Listening on http://localhost:${this.port}`)
        })
    }
}