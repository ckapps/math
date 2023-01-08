import { describe, expect, it } from '@jest/globals';
import { angle } from './angle';

describe('algebra/vector/angle', () => {
  it('should return dot', () => {
    const r = angle([1, 0, 0], [0, 1, 0]);
    expect(r).toBe(Math.PI / 2);
  });
});
