import { multiply } from './multiply';

describe('base/multiply', () => {
  it('should multiply', () => {
    const result = multiply(1, 2, 3, 4);
    expect(result).toBe(1 * 2 * 3 * 4);
  });

  it('should return 0 for zero elements', () => {
    const result = multiply();
    expect(result).toBe(1);
  });
});
