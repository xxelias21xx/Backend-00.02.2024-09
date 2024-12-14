const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Nationality = sequelize.define("nationality",{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:{
            type: DataType.STRING
        },
        is_active:{
            type:DataType.BOOLEAN 
        }
    })
    return Nationality;
}