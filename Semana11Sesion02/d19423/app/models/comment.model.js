const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Comment = sequelize.define("comment",{
        name:{
            type: DataType.STRING
        },
        text:{
            type: DataType.STRING
        }
    })
    return Comment;
}