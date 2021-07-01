import { invert } from './invert';

describe('vector/invert', () => {
  test.each([
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    [
      [1, 1, 1],
      [-1, -1, -1],
    ],
    [
      [2, 2, 2],
      [-2, -2, -2],
    ],
    [
      [-1, -1, -1],
      [1, 1, 1],
    ],
    [
      [-2, -2, -2],
      [2, 2, 2],
    ],
  ])('should invert %p to %p', (v, expected) => {
    const result = invert(v);
    expect(result.length).toBe(expected.length);
    expect(result.every((v, i) => v === expected[i])).toBe(true);
  });
});
