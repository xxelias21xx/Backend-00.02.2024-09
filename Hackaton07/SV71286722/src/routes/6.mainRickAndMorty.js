const express = require('express')
const router = express.Router()
const { rickmortyController } = require('../controllers/rickmortyCntrl.js')

router.get('/',rickmortyController)

module.exports = router