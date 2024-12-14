module.exports= app=>{
    let router = require('express').Router();
    const nationality = require('../controllers/nationality.controller');
    router.post('/', nationality.create)
    router.get('/', nationality.findAll)
    app.use('/api/nationality', router);
}