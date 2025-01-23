import "dotenv/config"
import express from "express"

export class Server{
    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.json( {message:"Hello World!"} )
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening on port http://localhost:${this.port}`)
        })
    }
}