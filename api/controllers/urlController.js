require('dotenv').config()
const express = require("express");
const router = express.Router();
const HttpStatus = require("http-status-codes");
const { ShortenedURL } = require("../models/urlSchema");
const jwt = require("jsonwebtoken");
module.exports.shorten = async (req, res) => {
  const { body } = req;
  const { original_url } = body;
  const URL = await ShortenedURL.findOne({ original_url });
  if (URL) {
    const { hashed_url } = URL;
    return res
      .status(HttpStatus.OK)
      .json({ hashed_url, message: "URL Already Shortened." });
  } else {
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
        console.log({ err });
        return res.status(HttpStatus.FORBIDDEN).json({ message: "URL Error" });
      });
  }
};

module.exports.chart = (req, res) => {
  const token = req.header("Authorization");
  console.log({token})
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
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Token Invalid" });
    } else {
      console.log({payload})
      ShortenedURL.find()
        .then(shortenedURLs => {
          res.send(shortenedURLs);
        })
        .catch(err => {
          res.send(err);
        });
    }
  });
};

module.exports.unShort = async (req, res) => {
  const { hashed_url, city, location, ipAddress, ipType } = req.body;
  const trackingTime = Date.now();
  const returnURL = await ShortenedURL.findOneAndUpdate(
    { hashed_url },
    { $push: { city, location, ipAddress, ipType, trackingTime } }
  );
  if (returnURL) {
    const { original_url } = returnURL;
    return res
      .status(HttpStatus.OK)
      .json({ original_url, message: "Original URL Successfully Retrieved." });
  } else {
    return res.status(HttpStatus.FORBIDDEN).json({ message: "Invalid Codes" });
  }
};
