module.exports = (sequelize, DataType) => {
    const Mascotas = sequelize.define("mascotas", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        nombre: {
            type: DataType.STRING
        },
        raza: {
            type: DataType.STRING
        },
        color: {
            type: DataType.STRING
        },
        edad: {
            type: DataType.INTEGER
        },
        tipo: {
            type: DataType.STRING
        },
        peso: {
            type: DataType.STRING
        }
    });

    return Mascotas;
};