import { Vector } from './vector';
import { Vector3 } from './vector3';

describe('algebra/vector3', () => {
  function compare(a: Vector3, b: Vector3) {
    expect(Vector.equals(a, b)).toBe(true);
  }

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
      const result = a.cross(b);
      compare(result, expected);
    });
  });
});
