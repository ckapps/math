import { scale } from './scale';

type Vector = number[];

describe('algebra/vector/scale', () => {
  const cases: [number, Vector][] = [
    [0, [1, 2, 3]],
    [0, [0, 0, 0]],
    [1, [0, 0, 0]],
    [1, [1, 1, 1]],
    [1, [2, 2, 2]],
  ];

  test.each(cases)('should scale by %p', (scalar, components) => {
    const v1 = [...components];
    const result = scale(v1, scalar);

    expect(result).toEqual(components.map(c => c * scalar));
  });
});
