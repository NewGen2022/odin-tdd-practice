const calculator = require('./calculator');

// testing add method
test('add(2, 5) equals 7', () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test('add(-2, 5) equals 3', () => {
    expect(calculator.add(-2, 5)).toBe(3);
});

test('add(0.2, 0.5) equals 0.7', () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test('add("2", 5) equals 7', () => {
    expect(calculator.add('2', 5)).toBe('ARGUMENTS MUST BE NUMBERS');
});

// testing subtract method
test('subtract(2, 5) equals -3', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
});

test('subtract(-2, 5) equals -7', () => {
    expect(calculator.subtract(-2, 5)).toBe(-7);
});

test('subtract(0.2, 0.5) equals -0.3', () => {
    expect(calculator.subtract(0.2, 0.5)).toBe(-0.3);
});

test('subtract("2", 5) equals 7 ', () => {
    expect(calculator.subtract('2', 5)).toBe('ARGUMENTS MUST BE NUMBERS');
});

// testing method multiply
test('multiply(2, 5) equals 10', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
});

test('multiply(-2, 5) equals -10', () => {
    expect(calculator.multiply(-2, 5)).toBe(-10);
});

test('multiply(0.2, 0.5) equals 0.4', () => {
    expect(calculator.multiply(0.2, 0.5)).toBe(0.1);
});

test('multiply("2", 5) equals 7 ', () => {
    expect(calculator.multiply('2', 5)).toBe('ARGUMENTS MUST BE NUMBERS');
});

// testing method divide
test('divide(2, 5) equals 0.4', () => {
    expect(calculator.divide(2, 5)).toBe(0.4);
});

test('divide(-2, 5) equals -0.4', () => {
    expect(calculator.divide(-2, 5)).toBe(-0.4);
});

test('divide(0, 5) equals 0', () => {
    expect(calculator.divide(0, 5)).toBe(0);
});

test('divide(2, 0) equals CANNOT DIVIDE BY ZERO', () => {
    expect(calculator.divide(2, 0)).toBe('CANNOT DIVIDE BY ZERO');
});

test('divide("2", 5) equals 7 ', () => {
    expect(calculator.divide('2', 5)).toBe('ARGUMENTS MUST BE NUMBERS');
});