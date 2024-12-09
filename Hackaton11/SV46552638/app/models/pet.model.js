const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Pet = sequelize.define("pet",{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataType.STRING
        },
        birthdate:{
            type: DataType.DATE
        },
        is_active:{
            type:DataType.BOOLEAN 
        }
    })
    return Pet;
}