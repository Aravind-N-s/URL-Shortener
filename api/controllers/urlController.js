/** Url Controller
 * @module api/controllers
 */

/**
 * @namespace urlController
 */
require("dotenv").config();
/**
 * Mongoose Model for Url.
 * @const
 */
const { ShortenedURL } = require("../models/urlSchema");
/**
 * An implementation of JSON Web Tokens in Node.JS.
 * @const
 */
const jwt = require("jsonwebtoken");
const { logger, crashLogger } = require("../../config/logger");
const express = require("express");
const router = express.Router();
/**
 * Constants enumerating the HTTP status codes.
 * @const
 */
const HttpStatus = require("http-status-codes");

/**
 * Controller to handle Truecaller Login and Register
 * @name shorten
 * @function
 * @memberof module:api/controllers~urlController
 * @inner
 * @param {Object} request - Request Object
 * @param {Object} response - Response Object
 */
module.exports.shorten = async (req, res) => {
  logger.addContext('route',req.params.route);
  const { body } = req;
  const { original_url } = body;
  const URL = await ShortenedURL.findOne({ original_url });
  if (URL) {
    const { hashed_url } = URL;
    logger.info(`${hashed_url} existed`);
    return res
      .status(HttpStatus.OK)
      .json({ hashed_url, message: "URL Already Shortened." });
  } else {
    logger.info(`hashed_url created`);
    const shortenedURL = new ShortenedURL(body);
    shortenedURL
      .save()
      .then(shortenedURLs => {
        const { hashed_url } = shortenedURLs;
        return res
          .status(HttpStatus.OK)
          .json({ hashed_url, message: "URL Succesfully Shortened." });
      })
      .catch(err => {
        crashLogger.error(err);
        return res.status(HttpStatus.FORBIDDEN).json({ message: "URL Error" });
      });
  }
};

/**
 * Controller to handle Truecaller Login and Register
 * @name chart
 * @function
 * @memberof module:api/controllers~urlController
 * @inner
 * @param {Object} request - Request Object
 * @param {Object} response - Response Object
 */
module.exports.chart = (req, res) => {
  logger.addContext('route',req.params.route);
  const token = req.header("Authorization");
  /**
   * Function to verify user token.
   * @function
   * @inner
   * @param {Object} token - token obtained in request params.
   * @param {string} secret - Our JWT secret.
   * @param {callback} middleware - Returns payload obtained from token
   */
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      logger.warn(`Json web token doesn't exist`);
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Token Invalid" });
    } else {
      logger.info(`list of hashed_urls sent`);
      ShortenedURL.find()
        .then(shortenedURLs => {
          return res
            .status(HttpStatus.OK)
            .json({ shortenedURLs, message: "URL Succesfully Returned." });
        })
        .catch(err => {
          crashLogger.error(err);
          return res
            .status(HttpStatus.FORBIDDEN)
            .json({ message: "URL Error" });
        });
    }
  });
};

/**
 * Controller to handle Truecaller Login and Register
 * @name unShort
 * @function
 * @memberof module:api/controllers~urlController
 * @inner
 * @param {Object} request - Request Object
 * @param {Object} response - Response Object
 */
module.exports.unShort = async (req, res) => {
  logger.addContext('route',req.params.route);
  const { hashed_url, city, location, ipAddress, ipType } = req.body;
  const trackingTime = Date.now();
  const returnURL = await ShortenedURL.findOneAndUpdate(
    { hashed_url },
    { $push: { city, location, ipAddress, ipType, trackingTime } }
  );
  if (returnURL) {
    logger.info(`hashed_urls was retrieved and tracked`);
    const { original_url } = returnURL;
    return res
      .status(HttpStatus.OK)
      .json({ original_url, message: "Original URL Successfully Retrieved." });
  } else {
    crashLogger.error(err);
    return res.status(HttpStatus.FORBIDDEN).json({ message: "Invalid Codes" });
  }
};
