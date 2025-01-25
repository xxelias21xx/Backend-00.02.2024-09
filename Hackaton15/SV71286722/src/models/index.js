import { MessageModel } from "./message.model.js";
import { UserModel } from "./user.model.js";
import { ProductModel } from "./product.model.js";
import { PackageModel } from "./package.model.js";
import { sequelize as db } from "../config/dbconfig.js";

UserModel.hasMany(MessageModel, {
    foreignKey: 'userID',
})
MessageModel.belongsTo(UserModel, {
        foreignKey: 'userID',
    }
)

UserModel.hasMany(PackageModel, {
    foreignKey: 'userID',
})
PackageModel.belongsTo(UserModel, {
    foreignKey: 'userID',
})

PackageModel.belongsToMany(ProductModel, { through: 'Orders' })
ProductModel.belongsToMany(PackageModel, { through: 'Orders' })

db.sync({ force : true })