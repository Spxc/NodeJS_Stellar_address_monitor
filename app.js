/**
 * Name: app.js
 * Description: Application runtime file
 * Author: Stian W. Instebø
 */

/**
 * Load stellar import and library
 */
const stellar = require("./libs/stellar")

/**
 * Start stellar listener
 */
stellar.listener()