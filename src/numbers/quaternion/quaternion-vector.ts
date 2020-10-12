/**
 * This module holds vector related operations for quaternions
 */

import { vec3, scale as scaleV3 } from '../../algebra/vector3';
import { chain } from '../../functional/base';
import { multiplyWith } from '../../functional/numbers/quaternions/multiply-with';

import {
  conjugate,
  fromOmegaVector,
  Quaternion,
  xyz,
  wxyz,
} from '../quaternion';

/**
 * Rotates the given vector `v` by the quaternion `q`
 *
 * @param q A normalized quaternion
 * @param v A vector
 */
export function rotateVec3(q: Readonly<Quaternion>, v: vec3): vec3 {
  const V = fromOmegaVector(0, v);

  // prettier-ignore
  return chain(
    xyz,
    multiplyWith(conjugate(q)),
    multiplyWith(V)
  )(q);
}

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
 * @param q A normalized quaternion
 *
 * @returns
 * The axis-angle pair of this normalized quaternion
 */
export function toAxisAngle(q: Readonly<Quaternion>): [vec3, number] {
  const [w, ..._axis] = wxyz(q);

  const theta = Math.acos(w);
  const axis = scaleV3(_axis, 1 / Math.sin(theta));

  return [axis, theta * 2];
}
