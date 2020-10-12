import { heaviside } from './heaviside';

describe('base/heaviside', () => {
  const negativeValues = [
    [-Number.MIN_VALUE],
    [Number.MIN_SAFE_INTEGER],
    [-1],
    [-0.0001],
    [-Number.EPSILON],
  ];

  const nonNegativeValues = [
    [Number.MAX_VALUE],
    [Number.MAX_SAFE_INTEGER],
    [1],
    [0.0001],
    [Number.MIN_VALUE],
    [Number.EPSILON],
    [0],
  ];
  test.each(negativeValues)('should return 0 for %f', value => {
    expect(heaviside(value)).toBe(0);
  });

  test.each(nonNegativeValues)('should return 1 for %f', value => {
    expect(heaviside(value)).toBe(1);
  });
});
