import { Vector } from './vector';

describe('algebra/vector', () => {
  function compare(a: Vector, b: Vector) {
    expect(Vector.equals(a, b)).toBe(true);
  }

  describe('with instance', () => {
    const x = 0;
    const y = 0;
    const args = [x, y];
    let v: Vector;

    beforeEach(() => {
      v = new Vector(...args);
    });

    it('should create', () => {
      expect(v).toBeDefined();
    });

    it('should return components', () => {
      expect(v.components).toEqual(args);
    });

    it('should set components', () => {
      const newComponents = [1, 2, 3, 4, 5, 6];
      v.components = newComponents;
      expect(v.components).toEqual(newComponents);
    });

    it('toString returns string', () => {
      expect(typeof v.toString()).toBe('string');
    });

    describe('magnitude', () => {
      const cases: [number[], number][] = [
        [[1, 2, 3], 1 * 1 + 2 * 2 + 3 * 3],
        [[0, 0, 0], 0],
        [[1, 1, 1], 3],
      ];

      it.each(cases)(
        'should return magnitude sqared',
        (components, magnitudeSquared) => {
          const v = new Vector(...components);
          expect(v.sqrtMagnitude).toBe(magnitudeSquared);
        },
      );

      it.each(cases)(
        'should return magnitude sqared',
        (components, magnitudeSquared) => {
          const v = new Vector(...components);
          expect(v.magnitude).toBe(Math.sqrt(magnitudeSquared));
        },
      );
    });

    describe('normalized', () => {
      it('should normalize', () => {
        const v = new Vector(1, 2, 3).normalized;
        expect(v.magnitude).toEqual(1);
      });
    });
  });

  describe('static', () => {
    describe('add', () => {
      it('should add', () => {
        const components = [1, 2, 3];
        const v1 = new Vector(...components);
        const v2 = new Vector(...components);

        const result = Vector.add(v1, v2);

        expect(result.components).toEqual(components.map(c => c * 2));
      });
    });

    describe('subtract', () => {
      it('should subtract', () => {
        const components = [1, 2, 3];
        const v1 = new Vector(...components);
        const v2 = new Vector(...components);

        const result = Vector.subtract(v1, v2);

        expect(result.components).toEqual(components.map(() => 0));
      });
    });

    describe('scale', () => {
      const cases: [number, number[]][] = [
        [0, [1, 2, 3]],
        [0, [0, 0, 0]],
        [1, [0, 0, 0]],
        [1, [1, 1, 1]],
        [1, [2, 2, 2]],
      ];

      test.each(cases)('should scale by %p', (scale, components) => {
        const v1 = new Vector(...components);
        const result = Vector.scale(v1, scale);

        expect(result.components).toEqual(components.map(c => c * scale));
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
        const v1 = new Vector(...components);
        const result = Vector.divide(v1, scalar);

        expect(result.components).toEqual(components.map(c => c / scalar));
      });
    });

    describe('min', () => {
      const cases: [number[], Vector[]][] = [
        [
          [0, 0],
          [new Vector(0, 0), new Vector(1, 1)],
        ],
        [
          [0, 0],
          [new Vector(0, 1), new Vector(1, 0)],
        ],
        [
          [-1, 0],
          [new Vector(1, 0), new Vector(-1, 1)],
        ],
      ];

      test.each(cases)('should return %p', (expected, vectors) => {
        const result = Vector.min(...vectors);
        expect(result.components).toEqual(expected);
      });
    });

    describe('max', () => {
      const cases: [number[], Vector[]][] = [
        [
          [1, 1],
          [new Vector(0, 0), new Vector(1, 1)],
        ],
        [
          [1, 1],
          [new Vector(0, 1), new Vector(1, 0)],
        ],
        [
          [-1, 1],
          [new Vector(-2, 0), new Vector(-1, 1)],
        ],
      ];

      test.each(cases)('should return %p', (expected, vectors) => {
        const result = Vector.max(...vectors);
        expect(result.components).toEqual(expected);
      });
    });

    describe('distance', () => {
      const cases: [number, Vector, Vector][] = [
        [0, new Vector(0, 0), new Vector(0, 0)],
        [2, new Vector(0, 1), new Vector(0, -1)],
        [4, new Vector(0, -2), new Vector(0, 2)],
        [16, new Vector(-8, 0), new Vector(8, 0)],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = Vector.distance(a, b);
        expect(result).toEqual(expected);
      });
    });

    describe('equals', () => {
      const cases: [boolean, Vector, Vector][] = [
        [false, new Vector(0, 0), new Vector(1, 1)],
        [false, new Vector(0, 1), new Vector(1, 0)],
        [true, new Vector(0, 0), new Vector(0, 0)],
        [true, new Vector(1, 0), new Vector(1, 0)],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = Vector.equals(a, b);
        expect(result).toEqual(expected);
      });
    });
  });
});
