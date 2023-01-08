import { describe, expect, it, jest } from '@jest/globals';
import { clamp } from './clamp';

import * as base from '../../base/clamp';

describe('functional/scaleBy', () => {
  const clampSpy = jest.spyOn(base, 'clamp');

  it('should return a function', () => {
    expect(typeof clamp()).toBe('function');
  });

  it('should call clamp', () => {
    const [min, max] = [10, 20];
    const value = 0.5;
    const fn = clamp(min, max);

    fn(value);

    expect(clampSpy).toBeCalledWith(min, max, value);
  });

  it('should call clamp with default values', () => {
    const value = 0.5;
    const fn = clamp();

    fn(value);

    expect(clampSpy).toBeCalledWith(0, 1, value);
  });
});
