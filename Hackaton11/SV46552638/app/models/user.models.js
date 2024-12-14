const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const User = sequelize.define("user",{
        id: {
            type:DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type:DataType.STRING,
            allowNull: false,
            unique: true,
        },
        last_name: {
            type:DataType.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
        email: {
            type:DataType.STRING, 
            allowNull: false,
            unique:true
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return User;
}