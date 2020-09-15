import { radToDeg } from './rad-to-deg';

describe('base/rad-to-deg', () => {
  test.each([
    [0, 0],
    [45, Math.PI / 4],
    [90, Math.PI / 2],
    [180, Math.PI],
    [360, Math.PI * 2],
  ])('should return %p° for %p rad', (expected, rad) => {
    const result = radToDeg(rad);
    expect(result).toBe(expected);
  });
});
