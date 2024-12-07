const express = require('express')
const router = express.Router()
const { exchangeController } = require('../controllers/exchangeCntrl.js')

router.get('/:amount',exchangeController)

module.exports = router