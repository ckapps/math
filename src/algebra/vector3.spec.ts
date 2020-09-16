import { create } from './vector_base';
import { Vector } from './vector';

import { Vector3 } from './vector3';

describe('algebra/vector3', () => {
  function compare(a: Vector3, b: Vector3) {
    expect(Vector.equals(a, b)).toBe(true);
  }

  describe('with instance', () => {
    const x = 0;
    const y = 0;
    const z = 0;
    const args = [x, y, z];
    let v: Vector3;

    beforeEach(() => {
      v = new Vector3(x, y, z);
    });

    it('should create', () => {
      expect(v).toBeDefined();
    });

    it('should register factory for self', () => {
      const v = create([0, 0, 0]);
      expect(v instanceof Vector3).toBeTruthy();
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
    it('should get/set y', () => {
      v.z += 1;
      expect(v.z).toEqual(z + 1);
    });

    it('toString returns string', () => {
      expect(typeof v.toString()).toBe('string');
    });
  });

  describe('static', () => {
    describe('add', () => {
      it('should add', () => {
        const components = [1, 2, 3];
        const [x, y, z] = components;
        const v1 = new Vector3(x, y, z);
        const v2 = new Vector3(x, y, z);

        const result = Vector3.add(v1, v2);

        expect(result.components).toEqual(components.map(c => c * 2));
      });
    });

    describe('subtract', () => {
      it('should subtract', () => {
        const components = [1, 2, 3];
        const [x, y, z] = components;
        const v1 = new Vector3(x, y, z);
        const v2 = new Vector3(x, y, z);

        const result = Vector3.subtract(v1, v2);

        expect(result.components).toEqual(components.map(() => 0));
      });
    });

    describe('scale', () => {
      const cases: [number, [number, number, number]][] = [
        [0, [1, 2, 3]],
        [0, [0, 0, 0]],
        [1, [0, 0, 0]],
        [1, [1, 1, 1]],
        [1, [2, 2, 2]],
      ];

      test.each(cases)('should scale by %p', (scale, components) => {
        const v1 = new Vector3(...components);
        const result = Vector3.scale(v1, scale);

        expect(result.components).toEqual(components.map(c => c * scale));
      });
    });

    describe('divide', () => {
      const cases: [number, [number, number, number]][] = [
        [1, [0, 0, 0]],
        [1, [1, 1, 1]],
        [1, [2, 2, 2]],
        [2, [2, 2, 2]],
      ];

      test.each(cases)('should divide by %p', (scalar, components) => {
        const v1 = new Vector3(...components);
        const result = Vector3.divide(v1, scalar);

        expect(result.components).toEqual(components.map(c => c / scalar));
      });
    });

    describe('min', () => {
      const cases: [number[], Vector3[]][] = [
        [
          [0, 0, 0],
          [new Vector3(0, 0, 0), new Vector3(1, 1, 0)],
        ],
        [
          [0, 0, 0],
          [new Vector3(0, 1, 0), new Vector3(1, 0, 0)],
        ],
        [
          [-1, 0, 0],
          [new Vector3(1, 0, 0), new Vector3(-1, 1, 0)],
        ],
      ];

      test.each(cases)('should return %p', (expected, vectors) => {
        const result = Vector3.min(...vectors);
        expect(result.components).toEqual(expected);
      });
    });

    describe('max', () => {
      const cases: [number[], Vector3[]][] = [
        [
          [1, 1, 1],
          [new Vector3(0, 0, 0), new Vector3(1, 1, 1)],
        ],
        [
          [1, 1, 0],
          [new Vector3(0, 1, 0), new Vector3(1, 0, 0)],
        ],
        [
          [-1, 1, 0],
          [new Vector3(-2, 0, 0), new Vector3(-1, 1, 0)],
        ],
      ];

      test.each(cases)('should return %p', (expected, vectors) => {
        const result = Vector3.max(...vectors);
        expect(result.components).toEqual(expected);
      });
    });

    describe('dot', () => {
      const cases: [number, Vector3, Vector3][] = [
        [0, new Vector3(0, 0, 0), new Vector3(0, 0, 0)],
        [-1, new Vector3(0, 1, 0), new Vector3(0, -1, 0)],
        [-4, new Vector3(0, -2, 0), new Vector3(0, 2, 0)],
        [-64, new Vector3(-8, 0, 0), new Vector3(8, 0, 0)],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = Vector3.dot(a, b);
        expect(result).toEqual(expected);
      });
    });

    describe('distance', () => {
      const cases: [number, Vector3, Vector3][] = [
        [0, new Vector3(0, 0, 0), new Vector3(0, 0, 0)],
        [2, new Vector3(0, 1, 0), new Vector3(0, -1, 0)],
        [4, new Vector3(0, -2, 0), new Vector3(0, 2, 0)],
        [16, new Vector3(-8, 0, 0), new Vector3(8, 0, 0)],
      ];

      test.each(cases)('should return %p', (expected, a, b) => {
        const result = Vector3.distance(a, b);
        expect(result).toEqual(expected);
      });
    });

    describe('cross', () => {
      // For basis vectors
      test.each([
        [Vector3.right, Vector3.up, Vector3.forward],
        [Vector3.down, Vector3.right, Vector3.forward],
        [Vector3.up, Vector3.forward, Vector3.right],
        [Vector3.backward, Vector3.up, Vector3.right],
        [Vector3.forward, Vector3.right, Vector3.up],
        [Vector3.left, Vector3.forward, Vector3.up],
      ])('%s x %s = %s', (a: Vector3, b: Vector3, expected) => {
        const result = Vector3.cross(a, b);
        compare(result, expected);
      });
    });

    describe('defined vectors', () => {
      const cases: [[number, number, number], Vector3][] = [
        [[0, 0, 0], Vector3.zero],
        [[1, 1, 1], Vector3.one],
        [[0, 1, 0], Vector3.up],
        [[0, -1, 0], Vector3.down],
        [[-1, 0, 0], Vector3.left],
        [[1, 0, 0], Vector3.right],
        [[0, 0, 1], Vector3.forward],
        [[0, 0, -1], Vector3.backward],
      ];

      test.each(cases)('should return %p', (components, v) => {
        expect(v.components).toEqual(components);
      });
    });
  });
});
