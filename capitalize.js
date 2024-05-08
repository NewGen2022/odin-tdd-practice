function capitalize(str) {
    if (str.length === 0) {
        return '';
    }

    if (typeof str !== 'string') {
        return 'No valid characters';
    }

    const firstCharCode = str.charCodeAt(0);
    
    if ((firstCharCode >= 97 && firstCharCode <= 122) || (firstCharCode >= 65 && firstCharCode <= 90)) {
        return str[0].toUpperCase() + str.slice(1);
    }

    return 'No valid characters';
}

module.exports = capitalize;