const express = require("express")
const axios = require("axios")
const github = require("../routes/1.github.js")
const weather = require("../routes/2.weather.js")
const exchange = require("../routes/3.exchange.js")

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

        this.app.use('/github', github)

        this.app.use('/weather', weather)

        this.app.use('/exchange', exchange)

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