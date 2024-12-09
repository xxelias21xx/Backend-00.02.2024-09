const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Vaccine = sequelize.define("vaccine",{
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
    return Vaccine;
} 