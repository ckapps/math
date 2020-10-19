import { divide } from './divide';

describe('algebra/vector/divide', () => {
  const cases: [number, number[]][] = [
    [1, [0, 0, 0]],
    [1, [1, 1, 1]],
    [1, [2, 2, 2]],
    [2, [2, 2, 2]],
  ];

  test.each(cases)('should divide by %p', (scalar, components) => {
    const v1 = [...components];
    const result = divide(v1, scalar);

    expect(result).toEqual(components.map(c => c / scalar));
  });
});
