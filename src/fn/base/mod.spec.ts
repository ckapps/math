import { mod } from './mod';

describe('functional/mod', () => {
  it('should return a function', () => {
    expect(typeof mod(4)).toBe('function');
  });

  test.each([
    // mod 1
    [0, 1, 0 % 1],
    [1, 1, 1 % 1],
    // mod 2
    [0, 2, 0 % 2],
    [1, 2, 1 % 2],
    [2, 2, 2 % 2],
    [3, 2, 3 % 2],
    [4, 2, 4 % 2],
  ])('%p % %p = %p', (n, modulus, expected) => {
    const fn = mod(modulus);
    expect(fn(n)).toBe(expected);
  });
});
