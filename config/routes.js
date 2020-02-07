const express = require ('express')
const router = express.Router()
// const passport = require('passport')
const urlController = require('../api/controllers/urlController')

//user
router.post('/shortenURL', urlController.shorten)
router.get('/chartAllURL', urlController.chart)
router.put('/unShortenURL', urlController.unShort)

module.exports = router