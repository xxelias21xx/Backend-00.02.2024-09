const { where } = require('sequelize');
const db = require('../models');
const Op = db.sequelize.Op;
const Tutorial = db.tutorials;
const Comment = db.comments;



exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "El campo titulo no puede estar vacio"
        })
        return;
    }
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        published: req.body.published ? req.body.published : false
    }
    Tutorial.create(tutorial).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ha ocurrido un error en el servidor"
        })
    })
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    console.log(title);
    let condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;
    console.log(condition);
    Tutorial.findAll({
        include: ["comments", "tags"]
    },
        {
            where: condition
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error en el servidor"
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se ha encontrado un tutorial con el id: ${id}`
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message: `Hubo un error al buscar el tutorial con el id: ${id}`
        })
    })
}

exports.update=(req,res)=>{
    const id = req.params.id;
    Tutorial.update(req.body, {
        where:{id:id}
    }).then(num=>{
        if(num==1){
            res.send({
                message: `El tutorial ${id} se ha actualizado correctamente`
            })
        }else{
            res.send({
                message:  `El tutorial ${id} no se ha podido actualizar`
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message: `Hubo un error al actualizar el tutorial con el id: ${id}`
        })
    })
}

exports.delete= (req,res)=>{
    const id = req.params.id
    Tutorial.distroy({
        where : {id:id}
    }).then(num=>{
        if(num==1){
            res.send({
                message: `El tutorial ${id} se ha borrado correctamente`
            })
        }else{
            res.send({
                message:  `El tutorial ${id} no se ha podido borrar`
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message: `Hubo un error al borrar el tutorial con el id: ${id}`
        })
    })
}

exports.deleteAll= (req,res)=>{
    Tutorial.distroy({
        where : {},
        truncate: false
    }).then(num=>{
        
            res.send({
                message: `${num} tutoriales se han borrado correctamente`
            })
       
    }).catch(err=>{
        res.status(500).send({
            message: `Hubo un error al borrar los tutoriales `
        })
    })
}

exports.published = (req, res)=>{
    Tutorial.findAll({
        where:{ published : true}
    }).then(data=>{
        if(data){
            res.send(data);
        }
        else{
            res.status(404).send({
                message: "No se han encontrado estos tutoriales"
            })
        }
    }).catch(err=>{
        send.status(500).send({
            message: "Hubo un error al traer estos tutoriales"
        })
    })
}

exports.createComment = (req, res)=>{
    const id = req.params.id;
    Comment.create({
        name: req.body.name,
        text: req.body.text,
        tutorialId: id
    }).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message: "Hubo un error al crear el comentario"
        })
    })
}