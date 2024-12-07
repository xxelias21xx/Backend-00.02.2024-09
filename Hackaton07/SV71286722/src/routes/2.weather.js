const express = require('express')
const router = express.Router()
const { weatherController } = require('../controllers/weatherCntrl.js')

router.get('/:city', weatherController)

module.exports = router