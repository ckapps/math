import { describe, expect, it } from '@jest/globals';
import { scale } from './scale';

describe('functional/scale', () => {
  it('should return a function', () => {
    expect(typeof scale([])).toBe('function');
  });

  it('should return same by scaling with 1', () => {
    const numbers = [0, 1, 2, 3, 4];
    const fn = scale(numbers);

    expect(fn(1)).toEqual(numbers);
  });

  it('should return all zero scaling with 0', () => {
    const numbers = [0, 1, 2, 3, 4];
    const fn = scale(numbers);

    expect(fn(0)).toEqual(numbers.map(() => 0));
  });

  it('should return NaN when scaling with NaN', () => {
    const numbers = [1];
    const fn = scale(numbers);

    expect(fn(Number.NaN)).toEqual([Number.NaN]);
  });

  it('should return NaN items', () => {
    const numbers = [Number.NaN];
    const fn = scale(numbers);

    expect(fn(0)).toEqual([Number.NaN]);
  });
});
