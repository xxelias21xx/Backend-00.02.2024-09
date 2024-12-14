const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Customer = sequelize.define("customer",{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dni: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
            is: /^[0-9]+$/i,
            len: [8], 
            }, 
        },
        
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataType.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
        home_adress: {
            type: DataType.STRING,
            allowNull: false,
        },
        phone: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
            is: /^[0-9]+$/i,
            },
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return Customer;
}