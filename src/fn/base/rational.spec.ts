import { describe, expect, it } from '@jest/globals';
import { rational } from './rational';

describe('functional/rational', () => {
  it('should calculate rational', () => {
    const p = [0, 10];
    const q = [0, 1];

    const fn = rational(p, q);
    const r = fn(10);

    expect(r).toBe(10);
  });
});
