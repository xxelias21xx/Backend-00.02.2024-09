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


app.post("/github", (req, res) => {
    const github = req.body.github;
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.github.com/users/${github}`,
    };

    axios.request(config)
        .then((response) => {
            const user = response.data;
            res.write(`<h1>Datos de ${github}</h1>`);

            res.write(`
                <p>Usuario: ${user.login} </p>
                <p>Tipo: ${user.type} </p>
                <p>Nombre: ${user.name} </p>
                <p>Empresa: ${user.company} </p>
                <p>Ubicacion: ${user.location} </p>
                <p>Ocupación: ${user.bio} </p>
                <p>Visibilidad: ${user.user_view_type} </p>
                <p>Repositorios Publicos: ${user.public_repos} </p>
                <p>Blog: ${user.blog} </p>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar el Usuario de GitHub");
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


app.post("/productos", (req, res) => {

    const config = {
        
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://fakestoreapi.com/products`,
    };

    axios.request(config)
        .then((response) => {
            const productos = response.data;
            // Extrae solo los nombres de los Pokémon y los convierte en una lista HTML
            const objeto = productos.map(producto => `<li>
                Nombre: ${producto.title}</br> 
                Precio:${producto.price}</br> 
                Descripcion:${producto.description}</br> 
                Categoria:${producto.category}</br> 
                Calificacion :${producto.rating.rate}</br> 
                Usuarios :${producto.rating.count}</br> 
                </li>`).join("");
            // Envía la lista formateada como respuesta HTML
            res.write(`<h1>Productos y detalles: </h1>`);
            res.write(`<ul>${objeto}</ul>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar lista productos");
        });
});


app.post("/datosFail", (req, res) => {

    const config = {
        
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://randomuser.me/api/`,
    };

    axios.request(config)
        .then((response) => {
            const usuarios = response.data.results;
            // Extrae solo los nombres de los Pokémon y los convierte en una lista HTML
            const user = usuarios.map(usuario => `<li>
                Nombre Completo: ${usuario.name.first} ${usuario.name.last}</br> 
                Genero:${usuario.gender}</br> 
                Edad:${usuario.dob.age}</br> 
                Telefono:${usuario.phone}</br> 
                Correo Electronico :${usuario.email}</br> 
                Ubicacion :${usuario.location.country} - ${usuario.location.state}- ${usuario.location.city} - ${usuario.location.street.name} - ${usuario.location.street.number}</br> 
                </li>`).join("");
            // Envía la lista formateada como respuesta HTML
            res.write(`<h1>Productos y detalles: </h1>`);
            res.write(`<ul>${user}</ul>`);
            res.end();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error al consultar lista productos");
        });
});


app.listen(PORT,()=>{

    console.log(`Express esta funcionando en el puerto ${PORT}`)
})