/** Express Server
 * @module server/app
 */

/**
 * @namespace appServer
 */
/**
 * Importing environmental variables
 */
require("dotenv").config();
/**
 * Importing mongoose connection
 */
const mongoose = require("./config/database");
/**
 * Express is a Node.js web application framework
 * @const
 */
const express = require("express");
/**
 * CORS is a Node.JS package for providing a Connect/Express middleware that can be used to enable CORS
 * @const
 */
const cors = require("cors");
/**
 * Node.JS path module
 * @const
 */
const router = require("./config/routes");
/**
* Reuiring Loggers
* @const
*/
const { logger, consoleLogger } = require("./config/logger");
const app = express();
const path = require("path")

app.use(express.json());

/**
 * Cross Origin Resource Sharing (CORS) allows us to use Web applications within browsers when domains aren't the same
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} cors - Enable cors in our application
 */
app.use(cors());

const port = process.env.PORT;

/**
 * Serving Routes
 * @function
 * @name get
 * @memberof module:server/app~appServer
 * @inner
 * @param {string} root - Root Route
 * @param {object} router - Express Router
 */
app.get("/", (req, res) => {
  res.send("Welcome to url-shortner");
});

/**
 * Serving Routes
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {string} root - Root Route
 * @param {object} router - Express Router
 */
app.use("/shortservices", router);


app.use(express.static(path.join(__dirname,"client/build")))

app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})


app.listen(port, () => {
  consoleLogger.info("Connected at Port:", port);
});
