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
//Definicion de relaciones foraneas(FK)
// db.tutorials.hasMany(db.comments,{
//     as:"comments"
// });
// // db.comments.belongsTo(db.tutorials,{
//     foreignKey: 'tutorialId',
//     as: "tutorials"
// });

// db.tags.belongsToMany(db.tutorials,{
//     through: 'tutorial_tag',
//     as: 'tutorials',
//     foreignKey: "tag_id"
// });
// db.tutorials.belongsToMany(db.tags,{
//     through: 'tutorial_tag',
//     as: 'tags',
//     foreignKey: "tutorial_id"
// });





module.exports = db;