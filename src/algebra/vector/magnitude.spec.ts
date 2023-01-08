import { describe, expect, it } from '@jest/globals';
import { magnitude, sqrtMagnitude } from './magnitude';

describe('algebra/vector/magnitude', () => {
  const cases: [number[], number][] = [
    [[1, 2, 3], 1 * 1 + 2 * 2 + 3 * 3],
    [[0, 0, 0], 0],
    [[1, 1, 1], 3],
  ];

  it.each(cases)(
    'should return magnitude sqared',
    (components, magnitudeSquared) => {
      expect(sqrtMagnitude(components)).toBe(magnitudeSquared);
    },
  );

  it.each(cases)('should return magnitude', (components, expected) => {
    expect(magnitude(components)).toBe(Math.sqrt(expected));
  });
});
