const capitalize = require("./capitalize");

test('"test" should become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
});
  
test('"Test" should become "Test"', () => {
    expect(capitalize('Test')).toBe('Test');
});
  
test('"TEST" should become "TEST"', () => {
    expect(capitalize('TEST')).toBe('TEST');
});
  
test('"three word test" should become "Three word test"', () => {
    expect(capitalize('three word test')).toBe('Three word test');
});
  
test('"1234" should become "No valid characters"', () => {
    expect(capitalize('1234')).toBe('No valid characters');
});
  
test('"@#$" should become "No valid characters"', () => {
    expect(capitalize('@#$')).toBe('No valid characters');
});
  
test('1234 should become "No valid characters"', () => {
    expect(capitalize(1234)).toBe('No valid characters');
});

test('Empty string should return empty string', () => {
    expect(capitalize('')).toBe('');
});

test('Single lowercase letter should be capitalized', () => {
    expect(capitalize('a')).toBe('A');
});

test('Single uppercase letter should remain unchanged', () => {
    expect(capitalize('Z')).toBe('Z');
});

test('Mixed case input should capitalize first letter and keep the rest unchanged', () => {
    expect(capitalize('aBcDe')).toBe('ABcDe');
});

test('String with non-letter characters should return "No valid characters"', () => {
    expect(capitalize('!@#$')).toBe('No valid characters');
});

test('Non-string input should return "No valid characters"', () => {
    expect(capitalize(1234)).toBe('No valid characters');
});