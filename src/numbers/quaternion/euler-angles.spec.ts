import { fromEulerZXY, toEulerAngles } from './euler-angles';

describe('algebra/quaternion', () => {
  const mockQuaternion = { w: 0, x: 1, y: 0, z: 0 };

  it('fromEulerZXY', () => {
    const r = fromEulerZXY([0, 0, 0]);

    expect(r).toBeDefined();
    expect(r.w).toBe(1);
    expect(r.x).toBe(0);
    expect(r.y).toBe(0);
    expect(r.z).toBe(0);
  });

  it('toEulerAngles', () => {
    const [x, y, z] = toEulerAngles(mockQuaternion);

    expect(x).toBe(0);
    expect(y).toBeCloseTo(0);
    expect(z).toBe(Math.PI);
  });
});
