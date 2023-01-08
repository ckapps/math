import { describe, expect, it } from '@jest/globals';
import { lerp, slerp } from './interpolation';

import { Quaternion } from './quaternion';

describe('algebra/quaternion', () => {
  const mockQuaternion1 = { w: 0, x: 1, y: 0, z: 0 };
  const mockQuaternion2 = { w: 0, x: 0, y: 0, z: 1 };
  const mockQuaternion3 = { w: 0, x: -1, y: 0, z: 0 };

  const compare = (r: Quaternion, expected: Quaternion) => {
    const { w, x, y, z } = expected;

    const numDigits = 5;
    expect(r).toBeDefined();
    expect(r.w).toBeCloseTo(w, numDigits);
    expect(r.x).toBeCloseTo(x, numDigits);
    expect(r.y).toBeCloseTo(y, numDigits);
    expect(r.z).toBeCloseTo(z, numDigits);
  };

  describe('linear', () => {
    it('should return a', () => {
      const r = lerp(mockQuaternion1, mockQuaternion2, 0);

      compare(r, mockQuaternion1);
    });

    it('should return b', () => {
      const r = lerp(mockQuaternion1, mockQuaternion2, 1);

      compare(r, mockQuaternion2);
    });
  });

  describe('spherical', () => {
    it('should return a', () => {
      const r = slerp(mockQuaternion1, mockQuaternion2, 0);

      compare(r, mockQuaternion1);
    });

    it('should return b', () => {
      const r = slerp(mockQuaternion1, mockQuaternion2, 1);

      compare(r, mockQuaternion2);
    });

    it('should invert for big angles', () => {
      const r = slerp(mockQuaternion1, mockQuaternion3, 1);

      compare(r, mockQuaternion1);
    });

    it('should use lerp for small angles', () => {
      const r = slerp(mockQuaternion1, mockQuaternion1, 1);

      compare(r, mockQuaternion1);
    });
  });
});
