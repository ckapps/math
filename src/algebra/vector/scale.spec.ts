import { scale, scaleBy } from './scale';

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

  describe('scale-by', () => {
    it('should scale by 0', () => {
      const scaleByZero = scaleBy(0);

      const result = scaleByZero([1, 2, 3]);
      expect(result).toEqual([0, 0, 0]);
    });

    it('should scale by 1', () => {
      const scaleByZero = scaleBy(1);

      const result = scaleByZero([1, 2, 3]);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should scale by 2', () => {
      const scaleByZero = scaleBy(2);

      const result = scaleByZero([1, 2, 3]);
      expect(result).toEqual([2, 4, 6]);
    });
  });
});
