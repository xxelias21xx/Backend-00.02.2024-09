const express = require("express");
const axios = require("axios");

class Server {
  originPath = "/api";
  githubPath = "/github";
  weatherPath = "/weather";
  lstPoke ="/Pokemon";
  habiPoke="/Pokehabi";
  lstRick="/RickyMort";
  detRick="/RickyDeta";
  cocteles="/cocteles";
  productos="/productos";
  mtrFotos="/Fotos";
  CitaApi="/cita";
  Usuario="/usuario";
  lstPelicu="/topPeliculas";
  detPelicu="/Pelicula";
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

    this.app.get(`${this.originPath}${this.lstPelicu}`,async(req,res)=>{
      try {
        const result=await axios.get(
            `${process.env.API_CINE_PELICULAS}`
        )

        const NomPeliculas=result.data.results.map(ObjPelicu => ObjPelicu.original_title)

        return res.json({success:true,data:{NomPeliculas}})

         
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
    )



    this.app.get(`${this.originPath}${this.detPelicu}/:nomPelicula`,async(req,res)=>{
      try {
        const {nomPelicula} = req.params;
        if (!nomPelicula.trim()) {
          return res.status(400).json({
              errors: {
                  message: "se necesita enviar un nombre de pelicula",
                  code: 400,
              },
          });
      }   
        const result=await axios.get(
            `${process.env.API_PELICULAS_NOMBRE}${nomPelicula}&language=es-ES`
        )

        const DatoPeli={
          Pelicula: result.data.results[0].original_title,
          Detalle:result.data.results[0].overview
        }


        return res.json({success:true,data:{DatoPeli}})

         
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
    )

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

    this.app.get(`${this.originPath}${this.lstPoke}`,
        async(req,res)=>{
            try {
                const  result= await axios.get(
                    `${process.env.API_LISTA_POKEMON}`,
                );

                const ListaPokemon = result.data.results.map(nompoke => nompoke.name);
                return res.json({success:true,data:ListaPokemon});           
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
    )
    this.app.get(`${this.originPath}${this.habiPoke}/:nompoke`,
        async(req,res)=>{
            try {

                const { nompoke } = req.params;

                if (!nompoke.trim()) {
                    return res.status(400).json({
                        errors: {
                            message: "se necesita enviar un pokemon",
                            code: 400,
                        },
                    });
                }    
                 const  result= await axios.get( 
                    `${process.env.API_LISTA_HABIPOKE}/${nompoke}`
                );
                const ataque = result.data.moves.map(movimiento => movimiento.move.name);
    
                return res.json({ success: true, data: { name: nompoke, ataque } });
        
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
    )



    this.app.get(`${this.originPath}${this.CitaApi}/:nomCateCita`,
      async(req,res)=>{
          try {

              const { nomCateCita } = req.params;

              if (!nomCateCita.trim()) {
                  return res.status(400).json({
                      errors: {
                          message: "se necesita enviar una categoria de la cita",
                          code: 400,
                      },
                  });
              }    
               const  result= await axios.get( 
                  `${process.env.API_CITA}${nomCateCita}`,
                  {
                    headers: {
                      Authorization: `Bearer ${process.env.API_CITA_TOKEN}`,
                    },
                  }
              );
              
              const respData = {
                quote: result.contents.quotes[0].quote,
                author: result.contents.quotes[0].author
              };
  
              return res.json({ success: true, data: { Cita: respData.quote, Autor:respData.author } });
      
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
  )



    this.app.get(`${this.originPath}${this.lstRick}`,
        async(req,res)=>{
            try {
                const result= await axios.get(
                    `${process.env.API_LISTA_RICKMORT}`,
                );

                const Personajes= result.data.results.map(LstPerso => LstPerso.name);

                return res.json({success:true,data:{Personajes}});  
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
    )
    this.app.get(`${this.originPath}${this.detRick}/:nomperso`,
        async(req,res)=>{

            try {

                const { nomperso } = req.params;

                if (!nomperso.trim()) {
                    return res.status(400).json({
                        errors: {
                            message: "se necesita enviar el nombre del personaje",
                            code: 400,
                        },
                    });
                }    

                const result =await axios.get(
                    `${process.env.API_DETA_RICKMORT}${nomperso}`
                )
                
                return res.json({success:true,data:result.data});

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
    )

    this.app.get(`${this.originPath}${this.cocteles}/:ltrCoctel`,
      async(req,res)=>{
        try {
          const { ltrCoctel } = req.params;

          if (!ltrCoctel.trim()) {
            return res.status(400).json({
                errors: {
                    message: "se necesita enviar letra de inicio de coctel",
                    code: 400,
                },
            });
        }    

        const result =await axios.get(
            `${process.env.API_COCTELES_BEBIDAS}${ltrCoctel}`
        )

        const LstCocteles= result.data.drinks.map(NomCocteles=>NomCocteles.strDrink);

        return res.json({success : true, data : {LstCocteles}});

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
    )
    

    this.app.get(`${this.originPath}${this.mtrFotos}/:accessKey`,
      async(req,res)=>{
        try {
          

          const { accessKey } = req.params;

          const respuesta = await axios.get(
            `${procesAPI_TAM_ANC_FOTOS}`, 
         {
            params: { query: tema },
            headers: { Authorization: `Client-ID ${this.accessKey}` }
          });

          const fotos = respuesta.data.results;

          return res.json({success:true,data:{fotos}})

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

    )

    this.app.get(`${this.originPath}${this.productos}`,

      async (req,res)=>{
        try {
          const result =await axios.get(
            `${process.env.API_PRODUCTOS_LISTADO}`
          ) 


          const LstProducto=result.data.map(NomProdu => NomProdu.title)
          return res.json({success:true,data:{LstProducto} })

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


    )
      



    this.app.get(`${this.originPath}${this.Usuario}`,

      async (req,res)=>{
        try {
          const result =await axios.get(
            `${process.env.API_USARIO_RANDOM}`
          ) 
          const DatUsuari={
            Titulo:result.data.results[0].name.title,
            Nombre:result.data.results[0].name.first,
            Apellido:result.data.results[0].name.last,
          }
          
          return res.json({success:true,data:{DatUsuari} })

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


    )



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