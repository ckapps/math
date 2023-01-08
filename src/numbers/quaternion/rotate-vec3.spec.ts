import { describe, expect, it } from '@jest/globals';
import { rotateVec3 } from './rotate-vec3';

import * as v3 from '../../algebra/vector3';

type vec3 = v3.vec3;

describe('algebra/quaternion', () => {
  const mockQuaternion = { w: 0, x: 1, y: 2, z: 3 };

  const compare = (r: vec3, parts: number[]) => {
    const [x1, y1, z1] = r;
    const [x2, y2, z2] = parts;

    expect(x1).toBe(x2);
    expect(y1).toBe(y2);
    expect(z1).toBe(z2);
  };

  it('rotateVec3', () => {
    const r = rotateVec3(mockQuaternion, [0, 0, 1]);

    compare(r, [6, 12, 4]);
  });
});
