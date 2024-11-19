require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const axios = require('axios');
const PORT = process.env.PORT

app.use(express.json());

//app.get('/', (req, res) => {
//    res.send('Hello World!')
//  })

//Consultar los datos de GitHub de un usuario especifico.

app.get('/api/github/:username',async (req, res) => {
    try {
        const { username } = req.params;

        if(!username.trim()){
            return res.status(400).json({
                errors:{
                message: "se necesita enviar un username",
                code:400,
                },
            });
        }
   
        console.log("🚀 ~ app.get ~ username:", username)

        const result = await axios.get(`${process.env.API_GITHUB_URL}/users/${username}`);

        return res.json({success:true, data:result.data})
    } catch(err){
        if(err.status == 404){
            return res.status(404).json({
                errors: {
                    message: "Recurso no encontrado",
                    code: 404
                },
            });
        }

        return res.status(500).json({
            errors: {
                mesagge:"El servidor no pudo procesar esta solicitud",
                code: 500,
            },
        });
    }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

//Consultar el Clima de una ciudad o ubicacion especifica 

app.get("/clima",(req, res)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://weather-api138.p.rapidapi.com/weather?city_name=Quito',
        headers: { 
          'x-rapidapi-host': 'weather-api138.p.rapidapi.com', 
          'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186'
        }
      };
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        res.write("Ya consulto "+ ((parseFloat( response.data.main.temp)-273.15)));
        res.end();
      })
      .catch((error) => {
        console.log(error);
      });
})

//Consultar el tipo de cambio del dolar en Peru
app.get('/currency', async (req, res) => {
    
    const currencyApiUrl = `https://free.e-api.net.pe/tipo-cambio/today.json`;

    try {
        const response = await axios.get(currencyApiUrl);
        res.json(response.data);
        
    } catch (error) {
        
        res.status(500).json({ error: 'Error al consultar la API de tipo de cambio' });
    }
});

//Consultar la lista de Pokemones actual


app.get('/pokemons', async (req, res) => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0';  
    try {
        const response = await axios.get(apiUrl);
        const pokemons = response.data.results;

        res.json(pokemons);  
    } catch (error) {
        
        res.status(500).json({ error: 'Error al consultar la API de Pokémon' });
    }
});


//Consultar los poderes de un pokemon especifico   
app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;  

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try {
        const response = await axios.get(apiUrl);
        const pokemon = response.data;

    
        const moves = pokemon.moves.map(move => move.move.name);

        res.json({
            name: pokemon.name,
            moves: moves
        });
    } catch (error) {
        
        res.status(500).json({ error: 'No se pudo obtener el Pokémon o sus habilidades' });
    }
});


//Consultar los principales personajes de Rick and Morty

app.get('/rickymorty', async (req, res) => {
   
    const apiUrl = `https://rickandmortyapi.com/api/character`;

    try {
        const response = await axios.get(apiUrl);
        const personajes = response.data.results;

        res.json({personajes});
    } catch (error) {
        
        res.status(500).json({ error: 'No se pudo obtener los personajes' });
    }
});

//Consultar el detalle de cada personaje de Rick and Morty

app.get('/rickymorty/:personaje', async (req, res) => {
   
    const { personaje } = req.params;
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${personaje}`;

    try {
        const response = await axios.get(apiUrl);
        const personajes = response.data.results;

        res.json({personajes});
    } catch (error) {
        
        res.status(500).json({ error: 'No se pudo obtener los personajes' });
    }
});

//Consultar el top 10 de bebidas y cocteles

//La API PARA VER LA LISTA DE LOS 10 COCTELES TOP ES DE PAGO.

//Consultar un listado de productos de una tienda

app.get('/tienda', async (req, res) => {
   
    const apiUrl = `https://fakestoreapi.com/products`;

    try {
        const response = await axios.get(apiUrl);
        const productos = response.data;

        res.json({productos});
    } catch (error) {
        
        res.status(500).json({ error: 'No se pudo obtener los productos' });
    }
});

//Consultar y traer Fotografias con un determinado tema y tamaño

const UNSPLASH_ACCESS_KEY = '6HgVeVtemBslLE4UTgGm_HkfZDpAlMprE9cggAoPMuA';
app.get('/photos/:topic/:width/:height', async (req, res) => {
    
    const { topic, width, height } = req.query;  // Obtener parámetros de la URL

     try {
        // Construir la URL de la API de Unsplash para buscar fotos
        const apiUrl = `https://api.unsplash.com/search/photos?query=${topic}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=10`;

        // Hacer la solicitud a la API de Unsplash
        const response = await axios.get(apiUrl);
        
        
        const photos = response.data.results.map(photo => {
            const imageUrl = photo.urls.raw;  
            const imageWidth = parseInt(width) ;  
            const imageHeight = parseInt(height) ;  

            // Cambiar tamaño de la imagen
            const resizedImageUrl = `${imageUrl}?w=${imageWidth}&h=${imageHeight}&fit=crop`;

            return {
                alt_description: photo.alt_description,
                image_url: resizedImageUrl,
                photographer: photo.user.name,
                photographer_url: photo.user.links.html,
            };
        });

        // Enviar las fotos como respuesta
        res.json(photos);

    } catch (error) {
     
        res.status(500).json({ error: 'Error al obtener las fotos de Unsplash' });
    }
});


//Consultar citas famosas

const QUOTES_API_KEY = 'UsZjtVnGPDyjpczvYQRZ1aPDXWMz1gbCD9ey0L4W2fcdc9cf';

app.get('/quotes', async (req, res) => {

    try {
   
        const apiUrl = `http://quotes.rest/qod`;
  
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${QUOTES_API_KEY}`
            }
        });

        const quotes = response.data.contents.quotes.map(quote => ({
            quote: quote.quote,
            author: quote.author,
        }));

        res.json(quotes);
    } catch (error) {
       
        res.status(500).json({ error: 'Error al obtener las citas' });
    }
});

// Consultar datos ficticios de un usuario

app.get('/usuario', async (req, res) => {
   
    const apiUrl = `https://randomuser.me/api/`;

    try {
        const response = await axios.get(apiUrl);
        const usuario = response.data;

        res.json({usuario});
    } catch (error) {
        
        res.status(500).json({ error: 'No se pudo obtener el usuario' });
    }
});

//Consultar el top de peliculas de estreno 
MOVIES_API_KEY = 'df0903f81223823560eb10cf2180de45';

app.get('/peliculas', async (req, res) => {
   
    //const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIES_API_KEY}`;
    
    
    try {
        const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIES_API_KEY}&language=es-ES`;
        const response = await axios.get(apiUrl);
        
        
        let movies = response.data.results.map(movie => ({
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            vote_average: movie.vote_average
        }));

        movies.sort((a, b) => b.vote_average - a.vote_average);
        
        res.json(movies);
    } catch (error) {
        
        res.status(500).json({ error: 'No se pudo obtener la pelicula' });
    }
});


//Consultar el detalle de una pelicula especifica

app.get('/peliculas/:movie_id', async (req, res) => {
    
    const { movie_id } = req.params;
    //const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIES_API_KEY}`;
    
    
    try {
    
        const apiUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${MOVIES_API_KEY}&language=es-ES`;

        const response = await axios.get(apiUrl);

        const movieDetails = {
            title: response.data.title,
            overview: response.data.overview,
            release_date: response.data.release_date,
            genres: response.data.genres.map(genre => genre.name),
            vote_average: response.data.vote_average,
        };

        res.json(movieDetails);
    } catch (error) {
        
        res.status(500).json({ error: 'No se pudo obtener la pelicula' });
    }
});

//Consultar datos especificos de Marte

app.get('/mars/info', async (req, res) => {
    
    const nasaApiUrl = `https://api.nasa.gov/insight_weather/?api_key=${process.env.API_NASA_ACCOUNT_ID}&feedtype=json&ver=1.0`;

    try {
        const response = await axios.get(nasaApiUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al consultar la API de Marte de la NASA' });
    }
});



//app.get('/mars/photos', async (req, res) => {
//    
//    const { rover = 'curiosity', sol = 1000 } = req.query;
//    const nasaApiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${process.env.API_NASA_ACCOUNT_ID}`;
//
//    try {
//
//        const response = await axios.get(nasaApiUrl);
//        index = 102693;     
//        
//      //  console.log(response.data.photos[0])
//
//        for (i=0;i<response.data.photos.length;i++){
//            let temp = response.data.photos[i]
//            if (temp.id == index){
//                photo = temp.img_src
//                fecha = temp.earth_date
//                console.log(fecha)
//                console.log(photo)
//            }
//        }
//
//        res.write(`Link para ver la foto ${photo}`);
//        res.end();
//        
//        //res.json(response.data);
//    }   catch (error) {
//        console.error(error);
//        res.status(500).json({ error: 'Error al consultar la API de Marte de la NASA' });
//    }
//});
