import { vec3 } from '../../algebra/vector3';
import { chain } from '../../functional/base';
import { multiplyWith } from '../../functional/numbers/quaternions/multiply-with';

import { conjugate, fromOmegaVec3, Quaternion, xyz } from '../quaternion';

/**
 * Rotates the given vector `v` by the quaternion `q`
 *
 * @param q A normalized quaternion
 * @param v A vector
 */
export function rotateVec3(q: Readonly<Quaternion>, v: vec3): vec3 {
  const V = fromOmegaVec3(0, v);

  // prettier-ignore
  return chain(
    xyz,
    multiplyWith(conjugate(q)),
    multiplyWith(V)
  )(q);
}
