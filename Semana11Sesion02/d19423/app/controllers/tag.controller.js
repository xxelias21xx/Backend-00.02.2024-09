const db = require('../models');
const Tutorial  = db.tutorials;
const Tag = db.tags;

exports.create=(req,res)=>{
    const tag ={
        name: req.body.name
    }
    Tag.create(tag).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({ 
            message: "Hubo un error al crear el tag"
        })
    })
}
exports.findAll = (req,res)=>{
    Tag.findAll({
        include:[
            {
                model:Tutorial,
                as: "tutorials",
                attributes:["id","title", "description","url"],
                through:{
                    attributes:[]
                }
            }
        ]
    }).then(data=>{
        if(data){
            res.send(data)
        }else{
            send.status(404).send({
                message: "No se encontrado la informacion"
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message: "Hubo un eror en traer los TAGS"
        })
    })
}

exports.addTutorial= (req,res)=>{
    const tagId = req.body.tagId;
    const tutorialId = req.body.tutorialId;

    Tag.findByPk(tagId).then(tag=>{
        if(!tag){
            res.status(404).send({
                message: "No se pudo encontrar el tag"
            })
        }
        else{
            Tutorial.findByPk(tutorialId).then(tutorial=>{
                if(!tutorial){
                    res.status(404).send({
                        message:"Tutorial no encontrado"
                    })
                }else{
                    tag.addTutorial(tutorial);
                    res.send(tag)
                }
            }).catch(err=>{
                res.status(500).send({
                    message: "Hubo un error"
                })
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message: "Hubo un error"
        })
    })
}