/**
 * Name: stellar.js
 * Description: Support functions for the js stellar-sdk
 * Author: Stian W. Instebø
 */

/**
 * Import environment values
 */
require('dotenv').config()

/**
 * Load dataset containing addresses we want to listen for
 */
const addresses = require('../data/addresses.json')

/**
 * Load firebase import and library
 */
const firebase = require('./firebase')

/**
 * Import stellar-sdk
 */
const stellar = require('stellar-sdk')

/**
 * Setup stellar-sdk server object
 */
const server = new stellar.Server('https://horizon.stellar.org');

/**
 * Start stellar-sdk listener to stream the blockchain events which occurs.
 * @param { Array } addresses JSON Array containing addresses and push tokens
 * @returns Promise
 */
const listener = () => {
    return new Promise((resolve, reject) => {
        /**
         * Start the stellar-sdk streaming server
         */
        try {
            server.operations()
            .cursor('now')
            .stream({
                /**
                 * Receives an event from the network
                 * @param { JSONObject } event Blockchain Object
                 */
                onmessage: (event) => {
                    /**
                     * Check if the @param { string } source_account exists in 
                     * dataset @param { array } addresses
                     */
                    let address = addresses.find(address => address === event.source_account)
                    if (!address) {
                        return
                    }

                    /**
                     * Filter out unwanted events such as swaps and account changes
                     * not affecting the desired token
                     * 
                     * Set token to listen for in the environment file
                     */
                    if (event.selling_asset_code != process.env.ASSET_CODE && event.selling_asset_issuer != process.env.ASSET_ISSUER) {
                        return
                    }

                    /**
                     * Setup thresholds on what to notify on
                     */
                    if ((event.amount) <= (process.env.AMOUNT_THRESHOLD)) {
                        return
                    }

                    /**
                     * Notify the users from the tokens list (tokens.json)
                     */
                    firebase.notifyUsers()
                    .then(data => {
                        console.log('success [firebase]:', 'Notified users about changes')
                        return
                    })
                    .catch(error => {
                        /**
                         * Catch error and show it in the console
                         */
                        console.log("error [firebase]:", firebase)
                        reject(error)
                    })
                    console.log(event)
                },
                onerror: (error) => {
                    reject({status: "error", message: error, callback: null}) 
                }
            })
            resolve({status: "ok", message: "Listener is running", callback: null})
        } catch (error) {
            reject({status: "error", message: error, callback: null})   
        }
    })
}

module.exports = {
    listener
}