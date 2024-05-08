const validArrayNumber = (array) => {
    if (!Array.isArray(array)) return false;
    
    return array.every(num => typeof num === 'number');
};

const max = (array) => {
    return Math.max(...array);
};

const min = (array) => {
    return Math.min(...array);
};

const average = (array) => {
    const sum = array.reduce((acc, curr) => acc + curr, 0);

    return sum / array.length;
};


const analyzeArray = (array) => {
    if (!validArrayNumber(array)) return 'NOT AN ARRAY or NOT AN ARRAY WITH VALID NUMBERS';
    if (array.length < 1) return 'ARRAY CANNOT BE EMPTY';

    return {
        max: max(array),
        min: min(array),
        average: average(array),
        length: array.length,
    }
};

module.exports = analyzeArray;