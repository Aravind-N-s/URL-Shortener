/** URL Schema
 * @module api/models
 */

/**
 * @namespace shortenedURLSchema
 */

/**
 * Mongoose driver for MongoDb
 * @const
 */
const mongoose = require("mongoose");
/**
 * A library to validate inputs.
 * @const
 */
const validator = require("validator");
/**
 * short hash algorithm implementation in JS
 * @const
 */
const sh = require("shorthash");
/**
 * Plugin which adds pre-save validation for unique fields within a Mongoose schema.
 * @const
 */
const uniqueValidator = require("mongoose-unique-validator");

/**
 * variable declaration if schema
 * @const
 */
const Schema = mongoose.Schema;

/**
 * Mongoose Schema
 * @const
 */
const shortenedURLSchema = new Schema({
  original_url: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return validator.isURL(value);
      },
      message: function() {
        return "invalid URL format";
      }
    }
  },
  hashed_url: {
    type: String,
    index: true
  },
  city: [
    {
      type: String,
      default: "Global"
    }
  ],
  location: [
    {
      lat: {
        type: String
      },
      long: {
        type: String
      }
    }
  ],
  ipType: [
    {
      type: String
    }
  ],
  ipAddress: [
    {
      type: String,
      default: ""
    }
  ],
  trackingTime: [
    {
      type: Date
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

/**
 * Pre Middleware hook for save
 * @name pre
 * @function
 * @memberof module:api/models~shortenedURLSchema
 * @inner
 * @param {callback} middleware - Middleware with next as a param
 */
shortenedURLSchema.pre("save", function(next) {
  const data = this;
  data.hashed_url = sh.unique(data.original_url);
  next();
});

/**
 * Plugin to validate uniqueness of email
 */
shortenedURLSchema.plugin(uniqueValidator, { message: "URL Already Exists" });

const ShortenedURL = mongoose.model("shortenedURL", shortenedURLSchema);

module.exports = { ShortenedURL };

/**
 * @typedef {Object} shortenedURLsSchema
 * @property {String} original_url - original url by user
 * @property {String} hashed_url - hashed url to/from User
 * @property {Array} city - List of city names
 * @property {Array} location - List of latitude and longitude
 * @property {Array} ipType - List of residential or buisness visits
 * @property {Array} ipAddress - List of ipAddresses
 * @property {Array} trackingTime - List of times the link was visited
 * @property {String} createdAt - Date the link was created
 */
