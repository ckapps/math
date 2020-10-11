import * as vector from './vector';

type Vector = number[];

describe('algebra/vector', () => {
  describe('with instance', () => {
    describe('magnitude', () => {
      const cases: [number[], number][] = [
        [[1, 2, 3], 1 * 1 + 2 * 2 + 3 * 3],
        [[0, 0, 0], 0],
        [[1, 1, 1], 3],
      ];

      it.each(cases)(
        'should return magnitude sqared',
        (components, magnitudeSquared) => {
          expect(vector.sqrtMagnitude(components)).toBe(magnitudeSquared);
        },
      );

      it.each(cases)(
        'should return magnitude sqared',
        (components, magnitude) => {
          expect(vector.magnitude(components)).toBe(Math.sqrt(magnitude));
        },
      );
    });

    describe('normalized', () => {
      it('should normalize', () => {
        const v = vector.normalized([1, 2, 3]);
        expect(vector.magnitude(v)).toEqual(1);
      });
    });
  });

  describe('static', () => {
    describe('add', () => {
      it('should add', () => {
        const components = [1, 2, 3];
        const v1 = [...components];
        const v2 = [...components];

        const result = vector.add(v1, v2);

        expect(result).toEqual(components.map(c => c * 2));
      });
    });

    describe('subtract', () => {
      it('should subtract', () => {
        const components = [1, 2, 3];
        const v1 = [...components];
        const v2 = [...components];

        const result = vector.subtract(v1, v2);

        expect(result).toEqual(components.map(() => 0));
      });
    });

    describe('scale', () => {
      const cases: [number, Vector][] = [
        [0, [1, 2, 3]],
        [0, [0, 0, 0]],
        [1, [0, 0, 0]],
        [1, [1, 1, 1]],
        [1, [2, 2, 2]],
      ];

      test.each(cases)('should scale by %p', (scale, components) => {
        const v1 = [...components];
        const result = vector.scale(v1, scale);

        expect(result).toEqual(components.map(c => c * scale));
      });
    });

    describe('divide', () => {
      const cases: [number, number[]][] = [
        [1, [0, 0, 0]],
        [1, [1, 1, 1]],
        [1, [2, 2, 2]],
        [2, [2, 2, 2]],
      ];

      test.each(cases)('should divide by %p', (scalar, components) => {
        const v1 = [...components];
        const result = vector.divide(v1, scalar);

        expect(result).toEqual(components.map(c => c / scalar));
      });
    });

    describe('min', () => {
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
        const result = vector.min(...vectors);
        expect(result).toEqual(expected);
      });
    });

    describe('max', () => {
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
        const result = vector.max(...vectors);
        expect(result).toEqual(expected);
      });
    });

    describe('distance', () => {
      const cases: [number, Vector, Vector][] = [
        [0, [0, 0], [0, 0]],
        [2, [0, 1], [0, -1]],
        [4, [0, -2], [0, 2]],
        [16, [-8, 0], [8, 0]],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = vector.distance(a, b);
        expect(result).toEqual(expected);
      });
    });

    describe('equals', () => {
      const cases: [boolean, Vector, Vector][] = [
        [false, [0, 0], [1, 1]],
        [false, [0, 1], [1, 0]],
        [true, [0, 0], [0, 0]],
        [true, [1, 0], [1, 0]],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = vector.equals(a, b);
        expect(result).toEqual(expected);
      });
    });
  });
});
