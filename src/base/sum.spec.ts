import { describe, expect, it } from '@jest/globals';
import { sum } from './sum';

describe('base/sum', () => {
  it('should calculate avg', () => {
    const r = 10;

    const result = sum(...[r, r, r, r]);
    expect(result).toBe(r * 4);
  });

  it('should return NaN for zero elements', () => {
    const result = sum();
    expect(result).toBe(0);
  });
});
