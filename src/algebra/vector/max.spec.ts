import { max } from './max';

type Vector = number[];

describe('algebra/vector/max', () => {
  const cases: [number[], Vector[]][] = [
    [
      [1, 1],
      [
        [0, 0],
        [1, 1],
      ],
    ],
    [
      [1, 1],
      [
        [0, 1],
        [1, 0],
      ],
    ],
    [
      [-1, 1],
      [
        [-2, 0],
        [-1, 1],
      ],
    ],
  ];

  test.each(cases)('should return %p', (expected, vectors) => {
    const result = max(...vectors);
    expect(result).toEqual(expected);
  });
});
