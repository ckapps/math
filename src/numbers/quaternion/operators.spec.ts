import { describe, expect, it } from '@jest/globals';
import * as q from './operators';

import { Quaternion } from './quaternion';

describe('algebra/quaternion/operators', () => {
  const mockQuaternion = { w: 0, x: 1, y: 2, z: 3 };

  const compare = (r: Quaternion, parts: number[]) => {
    const [w, x, y, z] = parts;

    const numDigits = 5;
    expect(r).toBeDefined();
    expect(r.w).toBeCloseTo(w, numDigits);
    expect(r.x).toBeCloseTo(x, numDigits);
    expect(r.y).toBeCloseTo(y, numDigits);
    expect(r.z).toBeCloseTo(z, numDigits);
  };

  it('conjugate', () => {
    const r = q.conjugate(mockQuaternion);

    compare(r, [
      mockQuaternion.w,
      -mockQuaternion.x,
      -mockQuaternion.y,
      -mockQuaternion.z,
    ]);
  });

  it('invertSign', () => {
    const r = q.invertSign(mockQuaternion);

    compare(r, [
      -mockQuaternion.w,
      -mockQuaternion.x,
      -mockQuaternion.y,
      -mockQuaternion.z,
    ]);
  });

  it('normalize', () => {
    const r = q.normalize({ w: 2, x: 0, y: 0, z: 0 });

    compare(r, [1, 0, 0, 0]);
  });

  it('invert', () => {
    const r = q.invert({ w: 2, x: 1, y: 0, z: 0 });

    compare(r, [0.4, -0.2, -0, -0]);
  });

  describe('scalar operations', () => {
    it('scale', () => {
      const r = q.scale(mockQuaternion, 2);

      compare(r, [
        mockQuaternion.w * 2,
        mockQuaternion.x * 2,
        mockQuaternion.y * 2,
        mockQuaternion.z * 2,
      ]);
    });

    it('dividedBy', () => {
      const r = q.divideBy(mockQuaternion, 2);

      compare(r, [
        mockQuaternion.w * 0.5,
        mockQuaternion.x * 0.5,
        mockQuaternion.y * 0.5,
        mockQuaternion.z * 0.5,
      ]);
    });
  });

  describe('operators', () => {
    it('add', () => {
      const r = q.add(mockQuaternion, mockQuaternion);

      compare(r, [
        mockQuaternion.w * 2,
        mockQuaternion.x * 2,
        mockQuaternion.y * 2,
        mockQuaternion.z * 2,
      ]);
    });

    it('subtract', () => {
      const r = q.subtract(mockQuaternion, { ...mockQuaternion, w: 0, z: 0 });

      compare(r, [mockQuaternion.w, 0, 0, mockQuaternion.z]);
    });

    it('divide', () => {
      const r = q.divide(mockQuaternion, mockQuaternion);

      compare(r, [1, 0, 0, 0]);
    });

    it('dot', () => {
      const r = q.dot(mockQuaternion, mockQuaternion);
      const expected =
        mockQuaternion.w * mockQuaternion.w +
        mockQuaternion.x * mockQuaternion.x +
        mockQuaternion.y * mockQuaternion.y +
        mockQuaternion.z * mockQuaternion.z;

      expect(r).toBe(expected);
    });
  });
});
