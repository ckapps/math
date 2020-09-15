import { clamp } from './clamp';

describe('base/clamp', () => {
  it('should return min', () => {
    const result = clamp(0, 10, -5);
    expect(result).toBe(0);
  });

  it('should return max', () => {
    const result = clamp(0, 10, 20);
    expect(result).toBe(10);
  });

  it('should return value', () => {
    const result = clamp(0, 10, 5);
    expect(result).toBe(5);
  });
});
