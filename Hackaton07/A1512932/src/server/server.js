const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

module.exports = class Server {
  // Rutas base
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.basePath = "/api";
    this.paths = {
      github: "/github",
      weather: "/weather",
      exchange: "/exchange",
      pokemon: "/pokemon",
      rickMorty: "/rickmorty",
      cocktails: "/cocktails",
      store: "/store",
      photos: "/photos",
      quotes: "/quotes",
      users: "/users",
      movies: "/movies",
      mars: "/mars"
    };

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, '../../public')));
  }

  routes() {
    // GitHub
    this.app.get(`${this.basePath}${this.paths.github}/:username`, async (req, res) => {
      try {
        const { username } = req.params;
        if (!username.trim()) {
          return res.status(400).json({
            error: "Username is required"
          });
        }
        const result = await axios.get(`${process.env.GITHUB_API_URL}/users/${username}`);
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Pokémon list
    this.app.get(`${this.basePath}${this.paths.pokemon}`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.POKEMON_API_URL}/pokemon?limit=20`);
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Pokémon abilities
    this.app.get(`${this.basePath}${this.paths.pokemon}/:name`, async (req, res) => {
      try {
        const { name } = req.params;
        const result = await axios.get(`${process.env.POKEMON_API_URL}/pokemon/${name}`);
        return res.json({ success: true, data: result.data.abilities });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Rick and Morty characters
    this.app.get(`${this.basePath}${this.paths.rickMorty}/characters`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.RICK_MORTY_API_URL}/character`);
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Rick and Morty character detail
    this.app.get(`${this.basePath}${this.paths.rickMorty}/character/:id`, async (req, res) => {
      try {
        const { id } = req.params;
        const result = await axios.get(`${process.env.RICK_MORTY_API_URL}/character/${id}`);
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Top 10 cocktails
    this.app.get(`${this.basePath}${this.paths.cocktails}`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.COCKTAIL_API_URL}/search.php?f=a`);
        const top10 = result.data.drinks.slice(0, 10);
        return res.json({ success: true, data: top10 });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Store products
    this.app.get(`${this.basePath}${this.paths.store}`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.STORE_API_URL}/products`);
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Photos by theme
    this.app.get(`${this.basePath}${this.paths.photos}`, async (req, res) => {
      try {
        const { theme, size = 10 } = req.query;
        const result = await axios.get(`${process.env.UNSPLASH_API_URL}/search/photos`, {
          params: {
            query: theme,
            per_page: size
          },
          headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
          }
        });
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Random quotes
    this.app.get(`${this.basePath}${this.paths.quotes}`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.QUOTES_API_URL}/qod`);
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Random user data
    this.app.get(`${this.basePath}${this.paths.users}/random`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.RANDOM_USER_API_URL}`);
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Top movies
    this.app.get(`${this.basePath}${this.paths.movies}/top`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.MOVIE_API_URL}/movie/now_playing`, {
          params: {
            api_key: process.env.MOVIE_API_KEY
          }
        });
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Movie detail
    this.app.get(`${this.basePath}${this.paths.movies}/:id`, async (req, res) => {
      try {
        const { id } = req.params;
        const result = await axios.get(`${process.env.MOVIE_API_URL}/movie/${id}`, {
          params: {
            api_key: process.env.MOVIE_API_KEY
          }
        });
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });

    // Mars data
    this.app.get(`${this.basePath}${this.paths.mars}`, async (req, res) => {
      try {
        const result = await axios.get(`${process.env.NASA_API_URL}/insight_weather`, {
          params: {
            api_key: process.env.NASA_API_KEY,
            feedtype: 'json',
            ver: '1.0'
          }
        });
        return res.json({ success: true, data: result.data });
      } catch (error) {
        this.handleError(error, res);
      }
    });
  }

  // Manejador de errores centralizado
  handleError(error, res) {
    console.error('Error:', error.message);
    const status = error.response?.status || 500;
    const message = status === 404 ? 'Recurso no encontrado' : 'Error interno del servidor';
    return res.status(status).json({
      success: false,
      error: {
        message,
        status
      }
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
};