/** Mongoose Configuration
 * @module config/database
 */

/** 
* @namespace mongooseConfiguration
*/

/**
* Requiring Mongoose
* @const
*/
const mongoose = require("mongoose");

/**
* Reuiring Loggers
* @const
*/
const { logger, consoleLogger, crashLogger } = require("./logger");
mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
/**
 * @typedef {Object} options
 * @property {Boolean} useNewUrlParser To parser MongoDB connection strings
 */
const options = { useNewUrlParser: true };

const CONNECTION_URI = process.env.MONGO_URI;

/**
 * Opening Mongoose Connection
 * @name connect
 * @function
 * @memberof module:config/database~mongooseConfiguration
 * @inner
 * @param {string} CONNECTION_URI - MongoDB Connection URL
 * @param {object} connectionOptions - MongoDB Connection Options 
 */
mongoose
  .connect(CONNECTION_URI, options)
  .then(res => {
    consoleLogger.info("Connected to db: aiyo-labs-url");
  })
  .catch(err => {
    crashLogger.fatal("error connecting db...");
  });

module.export = mongoose;
