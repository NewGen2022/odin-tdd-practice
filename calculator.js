const isValidNumber = (a, b) => {
    return (typeof a === 'number' && typeof b === 'number');
};

const add = (a, b) => {
    if (isValidNumber(a, b)) {
        return a + b;
    }

    return 'ARGUMENTS MUST BE NUMBERS';
};

const subtract = (a, b) => {
    if (isValidNumber(a, b)) {
        return a - b;
    }

    return 'ARGUMENTS MUST BE NUMBERS';
};

const multiply = (a, b) => {
    if (isValidNumber(a, b)) {
        return a * b;
    }

    return 'ARGUMENTS MUST BE NUMBERS';
};

const divide = (a, b) => {
    if (isValidNumber(a, b)) {
        if (b === 0) {
            return 'CANNOT DIVIDE BY ZERO';
        }

        return a / b;
    }

    return 'ARGUMENTS MUST BE NUMBERS';
};

const calculator = {
    add, 
    subtract,
    multiply,
    divide
};

module.exports = calculator;