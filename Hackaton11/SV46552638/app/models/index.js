const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize =  sequelize;
//llamado a los modelos creados
//tablas base
db.user = require('./user.models')(sequelize,Sequelize);

db.nationality = require('./nationality.model')(sequelize,Sequelize);
db.ubigeo= require('./ubigeo.model')(sequelize,Sequelize);

db.vaccine = require('./vaccine.model')(sequelize,Sequelize);
db.sex= require('./sex.model')(sequelize,Sequelize);
db.race = require('./race.model')(sequelize,Sequelize);
db.species = require('./species.model')(sequelize,Sequelize);
//tablas que contienen foreneas
db.customer = require('./customer.model')(sequelize,Sequelize);
db.pet= require('./pet.model')(sequelize,Sequelize);

//Definicion de relaciones foraneas(FK) del cliente
db.nationality.hasMany(db.customer,{
    as:"customers"
});
db.customer.belongsTo(db.nationality,{
    foreignKey: 'nationalityID',
    as: "nationalities"
});

db.ubigeo.hasMany(db.customer,{
    as:"customers"
});
db.customer.belongsTo(db.ubigeo,{
    foreignKey: 'ubigeoID',
    as: "ubigeos"
});

////Definicion de relaciones foraneas(FK) de la mascota

db.vaccine.hasMany(db.pet,{
    as:"pets"
});
db.pet.belongsTo(db.vaccine,{
    foreignKey: 'vaccineID',
    as: "vaccines"
});

db.sex.hasMany(db.pet,{
    as:"pets"
});
db.pet.belongsTo(db.sex,{
    foreignKey: 'sexID',
    as: "sexs"
});

db.race.hasMany(db.pet,{
    as:"pets"
});
db.pet.belongsTo(db.race,{
    foreignKey: 'raceID',
    as: "races"
});

db.species.hasMany(db.pet,{
    as:"pets"
});
db.pet.belongsTo(db.species,{
    foreignKey: 'speciesID',
    as: "species"
});

module.exports = db;