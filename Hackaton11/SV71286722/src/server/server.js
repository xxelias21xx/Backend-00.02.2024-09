const express = require("express")


class Server {
    constructor() {
        this.port = process.env.PORT
        this.app = express()

        this.routes()
    }

    routes() {
    
        this.app.get('/',(req,res) => {
            res.send("<h1>Servidor</h1>")
        })

        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en puerto http://localhost:${this.port}`);
    });
    }
}

module.exports = {
  Server,
};