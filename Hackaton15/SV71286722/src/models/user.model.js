import { DataTypes, Model } from "sequelize";
import { sequelize as database } from "../config/dbconfig.js";

export class UserModel extends Model {
    static async getUsers(){
        const users = await UserModel.findAll()
        return users
    }

    static async createUser( input ){
        const userCreated = await UserModel.create( input )
        return userCreated
    }

    static async updateUser(id, input){
        const userUpdate = await UserModel.update(
            input,
            {
                where: {id}
            }
        )
        return userUpdate
    }

    static async deleteUser(id){
        const userDeleted = await UserModel.destroy({where:{id}})
        return userDeleted
    }
}

UserModel.init(
    {
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING,
            validate: { isEmail: true }
        },
        contraseña: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        sequelize: database,
        modelName: 'User'
    }
)