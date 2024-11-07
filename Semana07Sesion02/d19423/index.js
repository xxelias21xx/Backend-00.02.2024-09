let moment = require("moment")
const express = require('express')
const app = express()
var bodyParser=require("body-parser");
let fs = require("fs")
const PORT = 3000;
console.log("Inicio de mi aplicacion de node: "+ moment().format() )
app.use(bodyParser.urlencoded({extended:true}));
app.get('',(req,res)=>{
    fs.readFile("form.html",function(error, data){
        res.write(data);
        res.end();
    })
})

app.post("/formulario",(req,res)=>{
    console.log(req.body);
    res.write(`Hola ${req.body.nombre} ${req.body.apellido}`)
    res.end();
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})