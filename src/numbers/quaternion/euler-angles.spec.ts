import { describe, expect, it } from '@jest/globals';
import { fromEulerZXY, toEulerAngles } from './euler-angles';

describe('algebra/quaternion', () => {
  const quaternionHom = { w: 0, x: 1, y: 0, z: 0 };
  const quaternionInhom = { w: 0, x: 5, y: 0, z: 0 };

  it('fromEulerZXY', () => {
    const r = fromEulerZXY([0, 0, 0]);

    expect(r).toBeDefined();
    expect(r.w).toBe(1);
    expect(r.x).toBe(0);
    expect(r.y).toBe(0);
    expect(r.z).toBe(0);
  });

  describe('toEulerAngles', () => {
    it('should transform to euler angles without homogenous', () => {
      const [x, y, z] = toEulerAngles(quaternionHom);

      expect(x).toBe(0);
      expect(y).toBeCloseTo(0);
      expect(z).toBe(Math.PI);
    });

    it('should transform to euler angles with homogenous', () => {
      const [x, y, z] = toEulerAngles(quaternionInhom, false);

      expect(x).toBe(Math.PI);
      expect(y).toBeCloseTo(0);
      expect(z).toBe(0);
    });
  });
});
