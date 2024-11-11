const express = require('express')
const router = express.Router()
const { pokemonController } = require('../controllers/pokemonCntrl.js')

router.get('/:size',pokemonController)

module.exports = router