/**
 * Import library
 */
const utils = require('../libs/utils')

test('Testing `Truncation`', () => {
    expect(utils.truncate('This is a test', 3, 3, 9)).toBe('Thi...est');
});