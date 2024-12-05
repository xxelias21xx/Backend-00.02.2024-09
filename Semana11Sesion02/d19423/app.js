const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;

let corsOptions= {
    origin : "*"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:  true}));


app.get("/",(req,res)=>{
    res.json({message:"Bienvenido a mi API"})
})
app.listen(PORT,()=>{
    console.log("Aplicacion inicializada en el puerto: "+ PORT);
})

