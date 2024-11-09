const express = require("express");
const fs = require("fs");
const axios = require('axios');
const app = express();
const bodyParser = require("body-parser")
const PORT = 3000;


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req, res) => {
    fs.readFile("home.html", (error, data) => {
        if (error) {
            res.status(500).send("Error al cargar el formulario");
        } else {
            res.write(data);
            res.end();
        }
    });
});


// Ruta para procesar la consulta de clima
app.post("/clima", (req, res) => {
    const city = req.body.city;
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`,
        headers: { 
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com', 
            'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186'
        }
    };

    axios.request(config)
        .then((response) => {
            const tempCelsius = (parseFloat(response.data.main.temp) - 273.15).toFixed(2);
            res.write(`<h1>Clima en ${city}</h1>`);
            res.write(`<p>Temperatura: ${tempCelsius} °C</p>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar el clima");
        });
});




app.post("/pokemon", (req, res) => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokeapi.co/api/v2/pokemon`,
    };

    axios.request(config)
        .then((response) => {
            const pokemones = response.data.results;
            // Extrae solo los nombres de los Pokémon y los convierte en una lista HTML
            const nombresPokemones = pokemones.map(pokemon => `<li>${pokemon.name}</li>`).join("");
            // Envía la lista formateada como respuesta HTML
            res.write(`<h1>Lista de Pokemon</h1>`);
            res.write(`<ul>${nombresPokemones}</ul>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar lista de Pekémones");
        });
});


app.post("/skillPokemon", (req, res) => {
    const skillPokemon = req.body.skillPokemon;
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokeapi.co/api/v2/pokemon/${skillPokemon}`,
    };

    axios.request(config)
        .then((response) => {
            const movimientos = response.data.moves;
            const nombresMovimientos = movimientos.map(movimiento => `<li>${movimiento.move.name}</li>`).join("");
            res.write(`<h1>Movimientos</h1>`);
            res.write(`<ul>${nombresMovimientos}</ul>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar movimientos");
        });
});


app.post("/rickMorty", (req, res) => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://rickandmortyapi.com/api/character`,
    };

    axios.request(config)
        .then((response) => {
            const personajes = response.data.results;
            // Extrae solo los nombres de los Pokémon y los convierte en una lista HTML
            const nombresPersonajes = personajes.map(personaje => `<li>${personaje.name}</li>`).join("");
            // Envía la lista formateada como respuesta HTML
            res.write(`<h1>Personajes Rick and Morty</h1>`);
            res.write(`<ul>${nombresPersonajes}</ul>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar lista de personajes");
        });
});


app.post("/detailRM", (req, res) => {

    const detailRM = req.body.detailRM;
    const config = {
        
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://rickandmortyapi.com/api/character/?name=${detailRM}`,
    };

    axios.request(config)
        .then((response) => {
            const detalles = response.data.results;
            // Extrae solo los nombres de los Pokémon y los convierte en una lista HTML
            const detallesPersonaje = detalles.map(detalle => 
                `<li>
                Nombre: ${detalle.name}</br> 
                Estado:${detalle.status}</br> 
                Epecie:${detalle.species}</br> 
                Genero:${detalle.gender}</br> 
                Origen:${detalle.origin.name}</br> 
                Ubicacion:${detalle.location.name}</br> 
                </li>`).join("");
            // Envía la lista formateada como respuesta HTML
            res.write(`<h1>Personajes Rick and Morty</h1>`);
            res.write(`<ul>${detallesPersonaje}</ul>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar lista de detalles del personaje");
        });
});


app.post("/cocteles", (req, res) => {

    const cocteles = req.body.cocteles;
    const config = {
        
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocteles}`,
    };

    axios.request(config)
        .then((response) => {
            const bebidas = response.data.drinks;
            // Extrae solo los nombres de los Pokémon y los convierte en una lista HTML
            const tragos = bebidas.map(bebida => `<li>${bebida.strDrink}</li>`).join("");
            // Envía la lista formateada como respuesta HTML
            res.write(`<h1>Bebidas y cocteles: </h1>`);
            res.write(`<ul>${tragos}</ul>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar lista bebidas y cocteles");
        });
});


// app.get('/cocteles', async (req, res) => {
//     const cocteles = req.body.cocteles;
//     try {
        
//         const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocteles}`);
//         const drinks = response.data.drinks;

//         // Build HTML to display the drinks
//         let html = `<h1>Vodka Cocktails</h1><ul>`;
//         drinks.forEach(drink => {
//             html += `
//                 <li>
//                     <h2>${drink.strDrink}</h2>
//                 </li>
//             `;
//         });
//         html += `</ul>`;

//         res.send(html);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Failed to fetch data from the API');
//     }
// });


// app.get("/clima",(req, res)=>{
//     let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: 'https://weather-api138.p.rapidapi.com/weather?city_name=Lima',
//         headers: { 
//           'x-rapidapi-host': 'weather-api138.p.rapidapi.com', 
//           'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186'
//         }
//       };
//       axios.request(config)
//       .then((response) => {
//         console.log(JSON.stringify(response.data));
//         res.write("Ya consulto "+ ((parseFloat( response.data.main.temp)-273.15)));
//         res.end();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// })



app.listen(PORT,()=>{

    console.log(`Express esta funcionando en el puerto ${PORT}`)
})