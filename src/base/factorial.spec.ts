import { factorial } from './factorial';

describe('base/factorial', () => {
  const negativeValues = [
    [1, 0],
    [1, 1],
    [2, 2],
    [3 * 2, 3],
    [4 * 3 * 2, 4],
    [5 * 4 * 3 * 2, 5],
    [6 * 5 * 4 * 3 * 2, 6],
    [7 * 6 * 5 * 4 * 3 * 2, 7],
    [8 * 7 * 6 * 5 * 4 * 3 * 2, 8],
  ];

  test.each(negativeValues)('should return %i for %i', (expected, value) => {
    expect(factorial(value)).toBe(expected);
  });
});
