module.exports=(sequelize, DataType)=>{
    const Clientes= sequelize.define("clientes",{
        dni: {
            type: DataType.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
              is: /^[0-9]+$/i,
              len: [8],
            },
        },
        nombres: {
            type: DataType.STRING
        },
        apellidos: {
            type: DataType.STRING
        },
        telefono: {
            type: DataType.STRING
        },
        email: {
            type: DataType.EMAIL,
            validate:{
                isEmail:true
            }
        },
        direccion: {
            type: DataType.STRING
        },
        activo: {
            type: DataType.BOOLEAN
        }
    });

    return Clientes;
}