module.exports= app=>{
    let router = require('express').Router();
    const tutorial = require('../controllers/tutorial.controller');
    const tag = require('../controllers/tag.controller')
    router.post('/', tutorial.create)
    router.get('/', tutorial.findAll)
    router.get('/:id',tutorial.findOne)
    router.put('/:id', tutorial.update)
    router.delete('/:id', tutorial.delete)
    router.delete('/', tutorial.deleteAll)

    router.get('/published/:id', tutorial.published)

    router.post('/comment/:id', tutorial.createComment)

    router.post('/tag', tag.create)
    router.get('/tag', tag.findAll)

    router.post("/tag/tutorial", tag.addTutorial)


    app.use('/api/tutorial', router); 
}