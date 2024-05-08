export const caesarCipher = (string, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

    const mapping = {};

    for (let i = 0; i < alphabet.length; i++) {
      mapping[alphabet[i]] = shiftedAlphabet[i];
      mapping[alphabet[i].toUpperCase()] = shiftedAlphabet[i].toUpperCase();
    }

    let result = '';

    for (let i = 0; i < string.length; i++) {
      const letterToEncrypt = string[i];
      result += mapping[letterToEncrypt] || letterToEncrypt;
    }
    
    return result;
};

module.exports = caesarCipher;