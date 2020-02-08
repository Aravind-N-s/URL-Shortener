/** Express router providing user related routes
 * @module config/routes
 */

/**
 * @namespace urlRouter
 */

/**
 * Express router to mount user related functions on.
 * @const
 */
const router = express.Router()
/**
 * Express is a Node.js web application framework
 * @const
 */
const express = require ('express')
/**
 * Controller Methods responsible for url creation and retrival
 * @const
 */
const urlController = require('../api/controllers/urlController')

/**
 * Route returning shortened url
 * @name /shortservices/shortenURL
 * @function
 * @memberof module:config/routes~urlRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/shortenURL', urlController.shorten)
/**
 * Route returning all urls
 * @name /shortservices/chartAllURL
 * @function
 * @memberof module:config/routes~urlRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/chartAllURL', urlController.chart)
/**
 * Route updating request tracks
 * @name /shortservices/unShortenURL
 * @function
 * @memberof module:config/routes~urlRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.put('/unShortenURL', urlController.unShort)

module.exports = router