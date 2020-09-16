import { create } from './vector_base';
import { Vector } from './vector';

import { Vector3 } from './vector3';

describe('algebra/vector3', () => {
  function compare(a: Vector3, b: Vector3) {
    expect(Vector.equals(a, b)).toBe(true);
  }

  describe('create', () => {
    it('should create', () => {
      const v = new Vector3(0, 0, 0);
      expect(v).toBeDefined();
    });

    it('should register factory for self', () => {
      const v = create([0, 0, 0]);
      expect(v instanceof Vector3).toBeTruthy();
    });
  });

  describe('components', () => {
    it('should create', () => {
      const x = 1;
      const y = 2;
      const z = 3;
      const v = new Vector3(x, y, z);
      expect(v.components).toEqual([x, y, z]);
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
});
