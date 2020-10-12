import { vec3, scale } from '../../algebra/vector3';

import { fromOmegaVec3, Quaternion, wxyz } from './quaternion';

/**
 * @param q A normalized quaternion
 *
 * @returns
 * The axis-angle pair of this normalized quaternion
 */
export function toAxisAngle(q: Readonly<Quaternion>): [vec3, number] {
  const [w, ..._axis] = wxyz(q);

  const theta = Math.acos(w);
  const axis = scale(_axis, 1 / Math.sin(theta));

  return [axis, theta * 2];
}

/**
 * Creates a quaternion from a normalized axis-angle pair rotation
 *
 * @param axis The axis
 * @param angle The angle
 *
 * @returns
 * A quaternion
 *
 * @example
 * // Creates a rotation of 10 radians around the z axis
 * const rot = fromAxisAngle(10, vec3.forward);
 */
export function fromAxisAngle(axis: vec3, angle: number) {
  const theta = angle / 2;

  return fromOmegaVec3(Math.cos(theta), scale(axis, Math.sin(theta)));
}
