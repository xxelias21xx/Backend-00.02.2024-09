const db = require('../models');
const Op = db.sequelize.Op;
const Nationality = db.nationality;

exports.create=(req,res)=>{ 
    if(!req.body.description){
        res.status(400).send({ 
            message: "El campo description no puede estar vacio"
        })
        return;
    }
    const nationality = {
        description: req.body.description,
        description: req.body.description,
        is_active: req.body.is_active,
        is_active: req.body.is_active ? req.body.is_active: false
    }
    Nationality.create(nationality).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Ha ocurrido un error en el servidor"
        })
    })
};

exports.findAll = (req,res)=>{
    console.log("llamando controlador!")
    // const description = req.query.description;
    // console.log(description);
    // let condition = description? {description:{
    //     [Op.like]: `%${description}%`
    // }}:null;
    // console.log(condition);
    // Nationality.findAll(
    // {
    //     where: condition
    // }).then(data=>{
    //     res.send(data);
    // }).catch(err=>{
    //     res.status(500).send({
    //         message: err.message || "Ha ocurrido un error en el servidor"
    //     })
    // })
}

/**
 * 
 * const db = require('../models');
const { Op } = require('sequelize');
const Nationality = db.nationality;

// Crear una nueva nacionalidad
exports.create = async (req, res) => {
    try {
        // Validación del campo description
        if (!req.body.description) {
            return res.status(400).send({ message: "El campo description no puede estar vacío." });
        }

        // Construcción del objeto a guardar
        const nationality = {
            description: req.body.description,
            is_active: req.body.is_active ?? false, // Valor predeterminado: false
        };

        // Guardar en la base de datos
        const data = await Nationality.create(nationality);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ha ocurrido un error en el servidor.",
        });
    }
};

// Obtener todas las nacionalidades
exports.findAll = async (req, res) => {
    try {
        // Filtro por descripción si se proporciona
        const description = req.query.description;
        const condition = description ? { description: { [Op.like]: `%${description}%` } } : null;

        // Buscar registros
        const data = await Nationality.findAll({
            where: condition,
            // include: ["comments", "tags"], // Activar si tienes estas relaciones definidas
        });

        res.send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ha ocurrido un error al recuperar los datos.",
        });
    }
};

 * 
 */