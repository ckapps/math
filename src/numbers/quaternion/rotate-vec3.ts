import { pipe } from 'fp-ts/function';
import { vec3 } from '../../algebra/vector3';
import { multiplyWith } from '../../fn/numbers/quaternions/multiply-with';

import { conjugate, fromOmegaVec3, Quaternion, xyz } from '../quaternion';

function rotateByVec3(v: vec3) {
  const V = fromOmegaVec3(0, v);

  return (q: Readonly<Quaternion>) =>
    pipe(
      q,
      multiplyWith(V),
      multiplyWith(conjugate(q)),
      // Finally, return as vector
      xyz,
    );
}

/**
 * Rotates the given vector `v` by the quaternion `q`
 *
 * @param q A normalized quaternion
 * @param v A vector
 */
export function rotateVec3(q: Readonly<Quaternion>, v: vec3): vec3 {
  return rotateByVec3(v)(q);
}
