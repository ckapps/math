import { describe, expect, it } from '@jest/globals';
import { subtract } from './subtract';

describe('base/subtract', () => {
  it('should subtract', () => {
    const r = 10;

    const result = subtract(...[r, r, r, r]);
    expect(result).toBe(r - r * 3);
  });

  it('should return 0 for zero elements', () => {
    const result = subtract();
    expect(result).toBe(0);
  });
});
