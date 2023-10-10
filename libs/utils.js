/**
 * Truncate number, string or text
 * @param { String } text String to truncate
 * @param { Int } startChars Number of characters at the start
 * @param { Int } endChars Number of characters at the ending
 * @param { Int } maxLength Max length of truncated string
 * @returns 
 */
const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
        let start = text.substring(0, startChars)
        let end = text.substring(text.length - endChars, text.length)
        while ((start.length + end.length) < maxLength) {
            start = start + '.'
        }
        return start + end
    }
    return text
}

module.exports = {
    truncate
}