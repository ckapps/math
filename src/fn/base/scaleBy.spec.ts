import { describe, expect, it, jest } from '@jest/globals';
import * as scale from './scale';
import { scaleBy } from './scaleBy';

describe('functional/scaleBy', () => {
  it('should return a function', () => {
    expect(typeof scaleBy(5)).toBe('function');
  });

  const scaleSpy = jest.spyOn(scale, 'scale');

  it('should call scale', () => {
    const numbers = [0, 1, 2, 3, 4];
    const fn = scaleBy(5);

    fn(numbers);

    expect(scaleSpy).toBeCalledWith(numbers);
  });
});
