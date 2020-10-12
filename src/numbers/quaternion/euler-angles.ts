import { vec3, scale } from '../../algebra/vector3';
import { cos, sin } from '../../geometry/trigonometric';

import { Quaternion, wxyz } from './quaternion';

/**
 * @param q A quaternion
 * @param homogenous
 *
 * @returns
 * The euler angles of the given quaternion `q`.
 */
export function toEulerAngles(
  q: Readonly<Quaternion>,
  homogenous = true,
): vec3 {
  const [w, x, y, z] = wxyz(q);
  const w2 = w * w;
  const x2 = x * x;
  const y2 = y * y;
  const z2 = z * z;

  let euler: vec3;

  if (homogenous) {
    euler = [
      Math.atan2(2 * (x * y + z * w), x2 - y2 - z2 + w2),
      Math.asin(-2 * (x * z - y * w)),
      Math.atan2(2 * (y * z + x * w), -x2 - y2 + z2 + w2),
    ];
  } else {
    euler = [
      Math.atan2(2 * (z * y + x * w), 1 - 2 * (x2 + y2)),
      Math.asin(-2 * (x * z - y * w)),
      Math.atan2(2 * (x * y + z * w), 1 - 2 * (y2 + z2)),
    ];
  }

  return euler;
}

/**
 * @param rotation Vector describing the rotation
 *
 * @returns
 * A rotation that rotates
 *  1. z degrees around the z axis,
 *  2. x degrees around the x axis and
 *  3. y degrees around the y axis
 *
 * applied in that order.
 */
export function fromEulerZXY(rotation: vec3) {
  const radians = scale(rotation, 0.5);
  const [cX, cY, cZ] = cos(radians);
  const [sX, sY, sZ] = sin(radians);

  // prettier-ignore
  return new Quaternion(
    cX * cY * cZ - sX * sY * sZ,
    sX * cY * cZ - cX * sY * sZ,
    cX * sY * cZ + sX * cY * sZ,
    cX * cY * sZ + sX * sY * cZ,
  );
}
