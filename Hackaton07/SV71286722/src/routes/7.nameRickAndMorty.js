const express = require('express')
const router = express.Router()
const { namerickmortyController } = require('../controllers/namerickmortyCntrl.js')

router.get('/',namerickmortyController)

module.exports = router