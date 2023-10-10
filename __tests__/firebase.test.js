/**
 * Import library
 */
const firebase = require('../libs/firebase')
const firebase_tokens = require('../data/tokens.sample.json')

test('Checking `Firebase tokens`', () => {
    expect(Array.isArray(firebase_tokens)).toBe(true)
})