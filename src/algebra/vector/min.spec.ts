import { min } from './min';

type Vector = number[];

describe('algebra/vector/min', () => {
  const cases: [number[], Vector[]][] = [
    [
      [0, 0],
      [
        [0, 0],
        [1, 1],
      ],
    ],
    [
      [0, 0],
      [
        [0, 1],
        [1, 0],
      ],
    ],
    [
      [-1, 0],
      [
        [1, 0],
        [-1, 1],
      ],
    ],
  ];

  test.each(cases)('should return %p', (expected, vectors) => {
    const result = min(...vectors);
    expect(result).toEqual(expected);
  });
});
