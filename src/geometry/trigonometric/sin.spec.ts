import { describe, expect, it, jest } from '@jest/globals';
import { sin } from './sin';

describe('functional/sin', () => {
  const sinSpy = jest.spyOn(Math, 'sin');

  it('should should apply sin function', () => {
    const numbers = [0, 1, 2, 3, 4];
    sin(numbers);

    expect(sinSpy).toBeCalledTimes(numbers.length);
  });
});
