import { describe, expect, it } from '@jest/globals';
import * as q from './quaternion';

import * as v3 from '../../algebra/vector3';

type vec3 = v3.vec3;

describe('algebra/quaternion', () => {
  const mockQuaternion = { w: 0, x: 1, y: 2, z: 3 };

  describe('create', () => {
    it('should create a quaternion', () => {
      const [w, x, y, z] = [1, 2, 3, 4];
      const r = new q.Quaternion(w, x, y, z);

      expect(r).toBeDefined();
      expect(r.w).toBe(w);
      expect(r.x).toBe(x);
      expect(r.y).toBe(y);
      expect(r.z).toBe(z);
    });

    it('fromOmegaVec3', () => {
      const w = 1;
      const v: vec3 = [0, 0, 0];
      const r = q.fromOmegaVec3(w, v);

      expect(r).toBeDefined();
      expect(r.w).toBe(w);
      expect(r.x).toBe(v[0]);
      expect(r.y).toBe(v[1]);
      expect(r.z).toBe(v[2]);
    });
  });

  describe('getter', () => {
    it('wxyz', () => {
      const [w, x, y, z] = q.wxyz(mockQuaternion);

      expect(w).toBe(mockQuaternion.w);
      expect(x).toBe(mockQuaternion.x);
      expect(y).toBe(mockQuaternion.y);
      expect(z).toBe(mockQuaternion.z);
    });

    it('xyz', () => {
      const [x, y, z] = q.xyz(mockQuaternion);

      expect(x).toBe(mockQuaternion.x);
      expect(y).toBe(mockQuaternion.y);
      expect(z).toBe(mockQuaternion.z);
    });
  });
});
