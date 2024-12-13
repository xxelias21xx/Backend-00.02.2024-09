const Sequelize = require("sequelize");
const sequelize = require("../../src/config/dbconfig.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Clientes = require('./clientes.model.js')(sequelize, Sequelize);
db.Mascotas = require('./mascotas.models.js')(sequelize, Sequelize);

module.exports= db;