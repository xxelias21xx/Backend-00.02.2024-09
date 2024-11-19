const express = require('express')
const router = express.Router()
const { gitHubController } = require('../controllers/githubCntrl.js')

router.get('/:username', gitHubController)

module.exports = router