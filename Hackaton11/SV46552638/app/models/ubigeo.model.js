const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Ubigeo = sequelize.define("ubigeo",{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ubigeo:{
            type: DataType.STRING
        },
        departament:{
            type: DataType.STRING
        },
        province:{
            type: DataType.STRING
        }, 
        district:{
            type: DataType.STRING
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return Ubigeo;
}