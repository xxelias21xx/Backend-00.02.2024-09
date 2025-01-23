const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(cors({ origin: '*'}));

app.get('/', (req,res)=>{
    res.send("Hola desde el back de culqi");
})

app.listen(PORT, ()=>{
    console.log("Servidor levantado en el puerto " + PORT);
})