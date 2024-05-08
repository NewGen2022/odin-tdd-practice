import analyzeArray from './analyzeArray';

test('normal number array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('array with non-number', () => {
  expect(analyzeArray([1, 2, 3, 4, '5'])).toBe('NOT AN ARRAY or NOT AN ARRAY WITH VALID NUMBERS');
});

test('array-like object (string)', () => {
  expect(analyzeArray('12345')).toBe('NOT AN ARRAY or NOT AN ARRAY WITH VALID NUMBERS');
});

test('Empty array must return message that ARRAY CANNOT BE EMPTY', () => {
  expect(analyzeArray([])).toBe('ARRAY CANNOT BE EMPTY');
});