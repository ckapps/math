import { describe, expect, test } from '@jest/globals';
import { distance } from './distance';

type Vector = number[];

describe('algebra/vector/distance', () => {
  const cases: [number, Vector, Vector][] = [
    [0, [0, 0], [0, 0]],
    [2, [0, 1], [0, -1]],
    [4, [0, -2], [0, 2]],
    [16, [-8, 0], [8, 0]],
  ];

  test.each(cases)('should return %p', (expected, a, b) => {
    const result = distance(a, b);
    expect(result).toEqual(expected);
  });
});
