const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Sex = sequelize.define("sex",{
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
    return Sex;
}