require("dotenv").config();

const { sequelize } = require("./models/index.js");
const {Server} = require('./server/server.js')


const server = new Server();

try{
    sequelize.authenticate()
    console.log('OK')
}catch(e){
    console.error('BAD')
}

server.listen();