import { Vector2 } from './vector2';
import { create } from './vector_base';

describe('algebra/vector2', () => {
  describe('with instance', () => {
    const x = 0;
    const y = 0;
    const args = [x, y];
    let v: Vector2;

    beforeEach(() => {
      v = new Vector2(x, y);
    });

    it('should create', () => {
      expect(v).toBeDefined();
    });

    it('should register factory for self', () => {
      const v = create([0, 0]);
      expect(v instanceof Vector2).toBeTruthy();
    });

    it('should set components', () => {
      expect(v.components).toEqual(args);
    });

    it('should get/set x', () => {
      v.x += 1;
      expect(v.x).toEqual(x + 1);
    });

    it('should get/set y', () => {
      v.y += 1;
      expect(v.y).toEqual(y + 1);
    });

    it('toString returns string', () => {
      expect(typeof v.toString()).toBe('string');
    });
  });

  describe('static', () => {
    describe('add', () => {
      it('should add', () => {
        const components = [1, 2];
        const [x, y] = components;

        const v1 = new Vector2(x, y);
        const v2 = new Vector2(x, y);

        const result = Vector2.add(v1, v2);

        expect(result.components).toEqual(components.map(c => c * 2));
      });
    });

    describe('subtract', () => {
      it('should subtract', () => {
        const components = [1, 2];
        const [x, y] = components;
        const v1 = new Vector2(x, y);
        const v2 = new Vector2(x, y);

        const result = Vector2.subtract(v1, v2);

        expect(result.components).toEqual(components.map(() => 0));
      });
    });

    describe('scale', () => {
      const cases: [number, [number, number]][] = [
        [0, [1, 2]],
        [0, [0, 0]],
        [1, [0, 0]],
        [1, [1, 1]],
        [1, [2, 2]],
      ];

      test.each(cases)('should scale by %p', (scale, components) => {
        const v1 = new Vector2(...components);
        const result = Vector2.scale(v1, scale);

        expect(result.components).toEqual(components.map(c => c * scale));
      });
    });

    describe('divide', () => {
      const cases: [number, [number, number]][] = [
        [1, [0, 0]],
        [1, [1, 1]],
        [1, [2, 2]],
        [2, [2, 2]],
      ];

      test.each(cases)('should divide by %p', (scalar, components) => {
        const v1 = new Vector2(...components);
        const result = Vector2.divide(v1, scalar);

        expect(result.components).toEqual(components.map(c => c / scalar));
      });
    });

    describe('min', () => {
      const cases: [number[], Vector2[]][] = [
        [
          [0, 0],
          [new Vector2(0, 0), new Vector2(1, 1)],
        ],
        [
          [0, 0],
          [new Vector2(0, 1), new Vector2(1, 0)],
        ],
        [
          [-1, 0],
          [new Vector2(1, 0), new Vector2(-1, 1)],
        ],
      ];

      test.each(cases)('should return %p', (expected, vectors) => {
        const result = Vector2.min(...vectors);
        expect(result.components).toEqual(expected);
      });
    });

    describe('max', () => {
      const cases: [number[], Vector2[]][] = [
        [
          [1, 1],
          [new Vector2(0, 0), new Vector2(1, 1)],
        ],
        [
          [1, 1],
          [new Vector2(0, 1), new Vector2(1, 0)],
        ],
        [
          [-1, 1],
          [new Vector2(-2, 0), new Vector2(-1, 1)],
        ],
      ];

      test.each(cases)('should return %p', (expected, vectors) => {
        const result = Vector2.max(...vectors);
        expect(result.components).toEqual(expected);
      });
    });

    describe('dot', () => {
      const cases: [number, Vector2, Vector2][] = [
        [0, new Vector2(0, 0), new Vector2(0, 0)],
        [-1, new Vector2(0, 1), new Vector2(0, -1)],
        [-4, new Vector2(0, -2), new Vector2(0, 2)],
        [-64, new Vector2(-8, 0), new Vector2(8, 0)],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = Vector2.dot(a, b);
        expect(result).toEqual(expected);
      });
    });

    describe('distance', () => {
      const cases: [number, Vector2, Vector2][] = [
        [0, new Vector2(0, 0), new Vector2(0, 0)],
        [2, new Vector2(0, 1), new Vector2(0, -1)],
        [4, new Vector2(0, -2), new Vector2(0, 2)],
        [16, new Vector2(-8, 0), new Vector2(8, 0)],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = Vector2.distance(a, b);
        expect(result).toEqual(expected);
      });
    });

    describe('defined vectors', () => {
      const cases: [[number, number], Vector2][] = [
        [[0, 0], Vector2.zero],
        [[1, 1], Vector2.one],
        [[0, 1], Vector2.up],
        [[0, -1], Vector2.down],
        [[-1, 0], Vector2.left],
        [[1, 0], Vector2.right],
      ];

      test.each(cases)('should return %p', (components, v) => {
        expect(v.components).toEqual(components);
      });
    });
  });
});
