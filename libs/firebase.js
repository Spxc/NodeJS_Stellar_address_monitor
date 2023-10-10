/**
 * Load utils helper library
 */
const utils = require('./utils')

/**
 * Load firebase tokens from local file
 */
const firebase_tokens = require('../data/tokens.json')

/**
 * Notify users using Firebase
 * @param {JSONObject} event Event Object
 * @returns Promise
 */
const notifyUsers = (event) => {
    return new Promise((resolve, reject) => {
        /**
         * Setup variables to be used in the push notification
         */
        let source_account = utils.truncate(event.source_account)
        let amount = event.amount
        let asset_code = event.selling_asset_code ? selling_asset_code : 'XLM'

        /**
         * Prepare Object to be pushed
         */
        let pushObject = {
            title: `StashApp Admin`,
            message: `${utils.truncate(source_account)} sold ${amount} ${asset_code}`
        }

        /**
         * Push notification to users using the firebase-sdk
         */
        
        /**
         * Resolve the push object or reject with error message
         */
        resolve(pushObject)
    })
}

module.exports = {
    notifyUsers
}