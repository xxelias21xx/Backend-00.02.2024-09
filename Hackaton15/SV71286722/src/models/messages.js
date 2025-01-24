import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize as database } from "../config/dbconfig.js";

class MessageModel extends Model {

}

MessageModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        role: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.STRING
        },
    },
    { 
        timestamps: false,
        sequelize: database,
        modelName: 'Message',
    })

MessageModel.sync({ force: true })