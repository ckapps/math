import { lerp } from './lerp';

describe('base/clamp', () => {
  test.each([
    [10, 20, 0],
    [10, 20, -1],
    [-20, -10, 0],
    [-20, -10, -1],
  ])('should return start', (start, end, t) => {
    const result = lerp(start, end, t);
    expect(result).toBe(start);
  });

  test.each([
    [10, 20, 1],
    [10, 20, 2],
    [-20, -10, 1],
    [-20, -10, 2],
  ])('should return end', (start, end, t) => {
    const result = lerp(start, end, t);
    expect(result).toBe(end);
  });

  test.each([
    [10, 20, 0.5],
    [-20, -10, 0.5],
  ])('should return half', (start, end, t) => {
    const result = lerp(start, end, t);
    const expected = (start + end) / 2;
    expect(result).toBe(expected);
  });
});
