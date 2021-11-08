import { modWrap } from './mod-wrap';

describe('functional/mod-wrap', () => {
  it('should return a function', () => {
    expect(typeof modWrap(4)).toBe('function');
  });

  test.each([
    [3, -6, 0],
    [3, -5, 1],
    [3, -4, 2],
    [3, -3, 0],
    [3, -2, 1],
    [3, -1, 2],
    [3, 0, 0],
    [3, 1, 1],
    [3, 2, 2],
    [3, 3, 0],
    [3, 4, 1],
    [3, 5, 2],
    [3, 6, 0],
  ])('with mod %p and %p should be %p', (modulus, n, expected) => {
    const fn = modWrap(modulus);
    expect(fn(n)).toBe(expected);
  });
});
