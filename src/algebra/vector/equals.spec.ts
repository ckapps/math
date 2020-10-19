import { equals } from './equals';

type Vector = number[];

describe('algebra/vector/equals', () => {
  const cases: [boolean, Vector, Vector][] = [
    [false, [0, 0], [1, 1]],
    [false, [0, 1], [1, 0]],
    [true, [0, 0], [0, 0]],
    [true, [1, 0], [1, 0]],
  ];

  test.each(cases)('should return %p', (expected, a, b) => {
    const result = equals(a, b);
    expect(result).toEqual(expected);
  });
});
