import { describe, expect, it, jest } from '@jest/globals';
import { expand } from './expand';

describe('functional/expand', () => {
  const mockResults = [1, 'test', ['array'], { key: 'value' }, new Map()];

  const create = (results: unknown[]) => {
    const mockFns = results.map(r => jest.fn().mockReturnValue(r));

    const fn = expand(...mockFns);

    return { fn, mockFns };
  };

  it('should call functions with param', () => {
    const { fn, mockFns } = create(mockResults);

    const mockArgument = 'some-param';
    fn(mockArgument);

    mockFns.forEach(f => {
      expect(f).toBeCalledWith(mockArgument);
    });
  });

  it('should return array of values from functions', () => {
    const { fn } = create(mockResults);

    const result = fn('any-value');
    expect(result).toEqual(mockResults);
  });
});
