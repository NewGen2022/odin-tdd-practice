function reverseString (str) {
    if (str.length === 0) return str;
    if (typeof str !== 'string') return 'NOT THE STRING';

    return str.split('').reverse().join('');
}

module.exports = reverseString;