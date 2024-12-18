const express = require("express");
const axios = require("axios");

class Server {
  originPath = "/api";
  githubPath = "/github";
  weatherPath = "/weather";
  marsPath = "/mars";
  changeDolarPath = "/change/dolar";
  constructor() {
    this.port = process.env.PORT;
    this.app = express();

    this.routes();
    this.dbConnection();
    this.middleware();
  }

  routes() {
    //github
    this.app.get(this.originPath, (req, res) => {
      res.send("Hello World!");
    });
    this.app.get(
      `${this.originPath}${this.githubPath}/:username`,
      async (req, res) => {
        try {
          const { username } = req.params;

          if (!username.trim()) {
            return res.status(400).json({
              errors: {
                message: "se necesita enviar un username",
                code: 400,
              },
            });
          }

          const result = await axios.get(
            `${process.env.API_GITHUB_URL}/users/${username}`
          );

          return res.json({ success: true, data: result.data });
        } catch (err) {
          if (err.status == 404) {
            return res.status(404).json({
              errors: {
                message: "recurso no encontrado",
                code: 404,
              },
            });
          }

          return res.status(500).json({
            errors: {
              message: "el servidor no pudo procesar esta solicitud",
              code: 500,
            },
          });
        }
      }
    );

    this.app.get(
      `${this.originPath}${this.weatherPath}/:city`,
      async (req, res) => {
        try {
          const { city } = req.params;

          if (!city.trim()) {
            return res.status(400).json({
              errors: {
                message: "se necesita enviar una ciudad",
                code: 400,
              },
            });
          }

          const result = await axios.get(
            `${process.env.API_WEATHER_URL}/city/${city}/EN`,
            {
              headers: {
                "x-rapidapi-key": process.env.API_WEATHER_API_KEY,
                "x-rapidapi-host": "open-weather13.p.rapidapi.com",
              },
            }
          );
          return res.json({ success: true, data: result.data });
        } catch (err) {
          if (err.status == 404) {
            return res.status(404).json({
              errors: {
                message: "recurso no encontrado",
                code: 404,
              },
            });
          }

          return res.status(500).json({
            errors: {
              message: "el servidor no pudo procesar esta solicitud",
              code: 500,
            },
          });
        }
      }
    );

    this.app.get(`${this.originPath}${this.marsPath}`, async (req, res) => {
      try {
        const result = await axios.get(
          `${process.env.API_NASA_URL}/insight_weather/?api_key=${process.env.API_NASA_API_KEY}&feedtype=json&ver=1.0`
        );
        return res.json({ success: true, data: result.data });
      } catch (err) {
        console.log(err);
        if (err.status == 404) {
          return res.status(404).json({
            errors: {
              message: "recurso no encontrado",
              code: 404,
            },
          });
        }

        return res.status(500).json({
          errors: {
            message: "el servidor no pudo procesar esta solicitud",
            code: 500,
          },
        });
      }
    });

    this.app.get(
      `${this.originPath}${this.changeDolarPath}`,
      async (req, res) => {
        try {
          const result = await axios.get(
            `${process.env.API_CHANGE_DOLAR_URL}/sunat/tipo-cambio`,
            {
              headers: {
                Authorization: `Bearer ${process.env.API_CHANGE_DOLAR_API_KEY}`,
              },
            }
          );
          return res.json({ success: true, data: result.data });
        } catch (err) {
          if (err.status == 404) {
            return res.status(404).json({
              errors: {
                message: "recurso no encontrado",
                code: 404,
              },
            });
          }

          return res.status(500).json({
            errors: {
              message: "el servidor no pudo procesar esta solicitud",
              code: 500,
            },
          });
        }
      }
    );
  }

  middleware() {}

  dbConnection() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

module.exports = {
  Server,
};
