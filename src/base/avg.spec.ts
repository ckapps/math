import { describe, expect, it } from '@jest/globals';
import { avg } from './avg';

describe('base/avg', () => {
  it('should calculate avg', () => {
    const result = avg(...[10, 10, 10, 10]);
    expect(result).toBe(10);
  });

  it('should return NaN for zero elements', () => {
    const result = avg();
    expect(result).toBeNaN();
  });
});
