require('dotenv').config();

const fs = require("fs");
let moment = require("moment");
const express = require("express");
const app = express();
const axios = require("axios");
// var bodyParser = require("body-parser")
const PORT = process.env.PORT;
console.log("Inicio de aplicacion de node: " + moment().format());

app.get("", (req, res) => {
    fs.readFile("index.html",function(error, data){
        res.write(data);
        res.end();
        console.log("Hackaton 07");
    })
});

//GITHUB
app.get("/api/github/:username", async (req, res) => {
    try {
        const { username } = req.params;

        if(!username.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }
        console.log("file: index.js:22 - app.get - username:", username);
        const olo = `${process.env.API_GITHUB_URL}/users/${username}`;
        console.log(olo);
        const result = await axios.get(`${process.env.API_GITHUB_URL}/users/${username}`);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//CLIMA
app.get("/api/clima/:ciudad", async (req, res) => {
    try {
        const { ciudad } = req.params;

        if(!ciudad.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }
        console.log("file: index.js:60 - app.get - ciudad:", ciudad);
        const olo = `${process.env.API_CLIMA_URL}/weather?city_name=${ciudad}`;
        console.log(olo);
        const result = await axios.get(olo, { headers: {
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com', 
            'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186'
        }});

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//TIPO DE CAMBIO DOLAR
app.get("/api/dolarperu/:peticion", async (req, res) => {
    try {
        const { peticion } = req.params;

        if(!peticion.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }
        console.log("file: index.js:102 - app.get - tipo de cambio en peru: hacer la peticion 'tipoCambio.txt'");
        const olo = `${process.env.API_DOLARPERU_URL}/a/txt/${peticion}`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//LISTA DE POKEMONS
app.get("/api/listapokemon/:pokemon", async (req, res) => {
    try {
        const { pokemon } = req.params;

        if(!pokemon.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }
        console.log("file: index.js:140 - app.get - Pokemon:", pokemon);
        const olo = `${process.env.API_POKEMON_URL}/api/v2/pokemon/${pokemon}`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//PODERES DE UN POKEMON
app.get("/api/poderespokemon/:pokemon", async (req, res) => {
    try {
        const { pokemon } = req.params;

        if(!pokemon.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }
        console.log("file: index.js:140 - app.get - Poderes pokemon:", pokemon);
        const olo = `${process.env.API_POKEMON_URL}/api/v2/pokemon/${pokemon}`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data.abilities});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//PRINCIPALES PERSONAJES DE RICK AND MORTY
app.get("/api/personajesrym/", async (req, res) => {
    try {
        console.log("file: index.js:220 - app.get - Personajes Rick y Morty:");
        const olo = `${process.env.API_RICKANDMORTY_URL}/api/character`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//DETALLE DE CADA PERSONAJE DE RICK AND MORTY
app.get("/api/detallerym/:personaje", async (req, res) => {
    try {
        const { personaje } = req.params;

        if(!personaje.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }
        console.log("file: index.js:140 - app.get - Detalle Personaje:", personaje);
        const olo = `${process.env.API_RICKANDMORTY_URL}//api/character/${personaje}`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//COCTELES
app.get("/api/cocteles/:name", async (req, res) => {
    try {
        const { name } = req.params;

        if(!name.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }
        console.log("file: index.js:287 - app.get - Coctel:", name);
        const olo = `${process.env.API_COCTEL_URL}/api/json/v1/1/search.php?s=${name}`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//PRODUCTOS DE TIENDA
app.get("/api/tienda/", async (req, res) => {
    try {
        console.log("file: index.js:326 - app.get - Productos tienda:");
        const olo = `${process.env.API_TIENDA_URL}/products`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//DATOS FICTICIOS
app.get("/api/usuarios/", async (req, res) => {
    try {
        console.log("file: index.js:355 - app.get - Usuario random");
        const olo = `${process.env.API_USUARIOS_URL}/api/`;
        console.log(olo);
        const result = await axios.get(olo);

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//TOP PELICULAS ESTRENO
app.get("/api/peliculas/", async (req, res) => {
    try {
        console.log("file: index.js:384 - app.get - Peliculas en estreno");
        const olo = `${process.env.API_PELICULAS_URL}/3/movie/top_rated`;
        console.log(olo);
        const result = await axios.get(olo, { headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTY2NzdlY2VkYzk0Zjg2NzMzZDI5MjI2Y2ZiNDM2NiIsIm5iZiI6MTczMTQyOTk0OC44NzEwNDE4LCJzdWIiOiI2MWNkZDgyOTJlZmU0ZTAwNDI4YWNlZTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Trb4tOz0hhPVzPYWuj9bkkZN6wu1Aw_kVu9HQT4JlTE'
        }});

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//DETALLE DE PELICULAS
app.get("/api/detallepeliculas/:pelicula", async (req, res) => {
    try {
        const { pelicula } = req.params;

        if(!pelicula.trim()) {
            return res.status(400).json({
                errors: {
                    message: "Se necesita enviar un mensaje",
                    code: 400,
                },
            });
        }

        console.log("file: index.js:415 - app.get - Detalle de pelicula:", pelicula);
        const olo = `${process.env.API_PELICULAS_URL}/3/movie/${pelicula}`;
        console.log(olo);
        const result = await axios.get(olo, { headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTY2NzdlY2VkYzk0Zjg2NzMzZDI5MjI2Y2ZiNDM2NiIsIm5iZiI6MTczMTQyOTk0OC44NzEwNDE4LCJzdWIiOiI2MWNkZDgyOTJlZmU0ZTAwNDI4YWNlZTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Trb4tOz0hhPVzPYWuj9bkkZN6wu1Aw_kVu9HQT4JlTE'
        }});

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

//CLIMA EN MARTE
app.get("/api/climamarte/", async (req, res) => {
    try {

        console.log("file: index.js:457 - app.get - Clima en marte");
        const olo = `${process.env.API_NASA_URL}/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`;
        console.log(olo);
        const result = await axios.get(olo, { headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTY2NzdlY2VkYzk0Zjg2NzMzZDI5MjI2Y2ZiNDM2NiIsIm5iZiI6MTczMTQyOTk0OC44NzEwNDE4LCJzdWIiOiI2MWNkZDgyOTJlZmU0ZTAwNDI4YWNlZTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Trb4tOz0hhPVzPYWuj9bkkZN6wu1Aw_kVu9HQT4JlTE'
        }});

        return res.json({ success: true, data: result.data});


    } catch (error) {
        if(error.status == 404) {
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404,
                },
            });
        };
        return res.status(500).json({
            errors: {
                message: "El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    };
});

app.listen( PORT, () => {
    console.log(`App de Hackaton corriendo en puerto ${PORT}`);

});