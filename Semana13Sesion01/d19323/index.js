const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const multer = require('multer');
const storage = multer.diskStorage({
    destination(req, res, cb){
        cb(null, 'storage');
    },
    filename(req,file,cb){
        cb(null,file.originalname);
    }
})
const upload = multer({storage});

const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


let arrPersonas = [];
app.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.send("<h1>Hola desde express en texto planp</h1>");
});

app.get("/json",(req,res)=>{
    const objPersona = {nombre:"Roberto", apellido:"Pineda"}
    res.send(objPersona)
})

app.post("/json",(req,res)=>{
    const objPersona = {nombre:"Roberto", apellido:"Pineda"}
    arrPersonas.push(objPersona);
    res.status(201).send(arrPersonas);
})



app.get("/query",(req,res)=>{
    let data= {};
   data.nombre =  req.query.nombre;
   data.apellido = req.query.apellido;


    res.status(200).send(data);
})

app.get("/parametro/:nombre/:apellido",(req,res)=>{
    let data= {};
   data.nombre =  req.params.nombre;
   data.apellido = req.params.apellido;


    res.status(200).send(data);
})

app.post("/crear",(req,res)=>{
    let obj = req.body
    arrPersonas.push(obj)
    res.status(201).send(arrPersonas);
})

app.get('/redir',(req,res)=>{
    res.status(301).location('https://www.microsoft.com');
    res.end();
})

app.post('/upload',upload.single('image'), (req,res)=>{
    if(req.file){
        res.json(req.file)
    }else{
        res.status(500).send({message:"Hubo un error"})
    }
})

app.listen(PORT,()=>{console.log("Aplicacion excuchando en el puerto: "+PORT)})