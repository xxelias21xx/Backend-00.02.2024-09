const express = require('express')
const router = express.Router()
const { pokemonAbilityController } = require('../controllers/pokemonAbilityCntrl.js')

router.get('/:pokemon',pokemonAbilityController)

module.exports = router