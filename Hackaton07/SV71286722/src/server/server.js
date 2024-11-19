const express = require("express")
const github = require("../routes/1.github.js")
const weather = require("../routes/2.weather.js")
const exchange = require("../routes/3.exchange.js")
const pokemon = require("../routes/4.pokemon.js")
const pokemonAbility = require("../routes/5.pokemonAbility.js")
const mainRickAndMorty = require("../routes/6.mainRickAndMorty.js")
// const detailsRickAndMorty = require("../routes/7.detailsRickAndMorty.js")
// const topDrinks = require("../routes/8.topDrinks.js")
// const shopList = require("../routes/9.shopList.js")
// const image = require("../routes/10.image.js")
// const quotes = require("../routes/11.quotes.js")
// const randomUser = require("../routes/12.randomUser.js")
// const topMovies = require("../routes/13.topMovies.js")
// const detailMovie = require("../routes/14.detailMovie.js")
// const mars = require("../routes/15.mars.js")

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

        this.app.use('/pokemon/list', pokemon)

        this.app.use('/pokemon/ability', pokemonAbility)

        this.app.use('/RickMorty', pokemonAbility)

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