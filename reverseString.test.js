const reverseString = require('./reverseString');

test('qwerty must be ytrewq', () => {
    expect(reverseString('qwerty')).toBe('ytrewq');
});

test('3fsr must be rsf3', () => {
    expect(reverseString('3fsr')).toBe('rsf3');
});

test('12345 must 54321', () => {
    expect(reverseString('12345')).toBe('54321');
});

test('the string must gnirts eht', () => {
    expect(reverseString('the string')).toBe('gnirts eht');
});

test('qw!@23 must be 32@!wq', () => {
    expect(reverseString('qw!@23')).toBe('32@!wq');
});

test('Returns NOT THE STRING if it is not the string', () => {
    expect(reverseString(123)).toBe('NOT THE STRING');
});

test('Returns empty string if string is empty', () => {
    expect(reverseString('')).toBe('');
});
