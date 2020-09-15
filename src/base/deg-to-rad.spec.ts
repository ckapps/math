import { degToRad } from './deg-to-rad';

describe('base/deg-to-rad', () => {
  test.each([
    [0, 0],
    [Math.PI / 4, 45],
    [Math.PI / 2, 90],
    [Math.PI, 180],
    [Math.PI * 2, 360],
  ])('should return %p rad for %p°', (expected, deg) => {
    const result = degToRad(deg);
    expect(result).toBe(expected);
  });
});
