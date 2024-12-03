const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hola desde express");
});

app.listen(PORT, () => {
    console.log(`Express esta funcionando en el puerto ${PORT}`);
});