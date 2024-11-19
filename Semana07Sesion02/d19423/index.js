// let moment = require("moment")
// const express = require('express')
// const app = express()
// var bodyParser=require("body-parser");
// let fs = require("fs")
// const PORT = 3000;
// console.log("Inicio de mi aplicacion de node: "+ moment().format() )
// app.use(bodyParser.urlencoded({extended:true}));
// app.get('',(req,res)=>{
//     fs.readFile("form.html",function(error, data){
//         res.write(data);
//         res.end();
//     })
// })

// app.post("/formulario",(req,res)=>{
//     console.log(req.body);
//     res.write(`Hola ${req.body.nombre} ${req.body.apellido}`)
//     res.end();
// })

// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`)
// })

const express = require("express");
const fs = require("fs");
const axios = require('axios');
const app = express();
const bodyParser = require("body-parser")
const PORT = 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.get('',(req, res)=>{
    fs.readFile("form.html",function(error, data){
        res.write(data)
        res.end();
    })
    // res.send(404);
    // res.write("Hola desde express");
    // res.end();

})

app.post("/formulario",(req, res)=>{
    let body = req.body;
    res.write(`Hola ${body.nombre} ${body.apellido}`)
    res.end()
})

app.put("/formulario",(req, res)=>{
    let body = req.body;
    res.write(`hiciste un PUT ${body.nombre} ${body.apellido}`)
    res.end()
})

app.get("/clima",(req, res)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://weather-api138.p.rapidapi.com/weather?city_name=Lima',
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

app.delete("/formulario",(req, res)=>{
    let body = req.body;
    res.write(`hiciste un DELETE ${body.nombre} ${body.apellido}`)
    res.end()
})

app.listen(PORT,()=>{

    console.log(`Express esta funcionando en el puerto ${PORT}`)
})