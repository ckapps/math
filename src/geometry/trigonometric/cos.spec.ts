import { describe, expect, it, jest } from '@jest/globals';
import { cos } from './cos';

describe('functional/cos', () => {
  const cosSpy = jest.spyOn(Math, 'cos');

  it('should should apply sin function', () => {
    const numbers = [0, 1, 2, 3, 4];
    cos(numbers);

    expect(cosSpy).toBeCalledTimes(numbers.length);
  });
});
