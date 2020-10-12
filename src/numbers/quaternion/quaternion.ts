/**
 * This module holds the basis implementation for quaternions
 */

import * as vector3 from '../../algebra/vector3';

import { cos, sin } from '../../geometry/trigonometric';

type vec3 = vector3.vec3;

// --------------------------------------------------------
// Types
// --------------------------------------------------------
/**
 * Represents a number in the 4 dimensional quaternion number system.
 *
 * Every quaternion can be written in the form of `w + x i + y j + z k`.
 * In this `i`, `j` and `k` are bases spanning a 4 dimensional space and fullfilling
 * the following properties: `i^2 = j^2 = k^2 = ijk = -1`.
 *
 * Furthermore, `w`, `x`, `y`, `z` are real numbers.
 * `w` is considered the 'real part',
 * whereas `x i + y j + z k` is considered the 'imaginary part' or 'vector part'.
 */
export class Quaternion {
  w: number;
  x: number;
  y: number;
  z: number;

  constructor(w: number, x: number, y: number, z: number) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

// --------------------------------------------------------
// Creational
// --------------------------------------------------------
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
  const radians = vector3.scale(rotation, 0.5);
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

/**
 * @param w Real part
 * @param xyz Vector part
 *
 * @returns
 * A new quaternion from the given `w` and `xyz`.
 */
export function fromOmegaVec3(w: number, xyz: vec3) {
  const [x, y, z] = xyz;

  return new Quaternion(w, x, y, z);
}

/**
 * Creates a quaternion from a normalized axis-angle pair rotation
 *
 * @param axis The axis
 * @param angle The angle
 *
 * @returns
 * A quaternion
 */
export function fromAxisAngle(axis: vec3, angle: number) {
  const ha = angle / 2;

  return fromOmegaVec3(Math.cos(ha), vector3.scale(axis, Math.sin(ha)));
}

// --------------------------------------------------------
// Other
// --------------------------------------------------------
/**
 * @param q A quaternion
 *
 * @returns
 * An array with the real numbers from `q` in the order
 * `[w, x, y, z]`
 */
export function wxyz(
  q: Readonly<Quaternion>,
): [number, number, number, number] {
  const { w, x, y, z } = q;

  return [w, x, y, z];
}

/**
 * @param q A quaternion
 *
 * @returns
 * An array with the real numbers from `q` in the order
 * `[w, x, y, z]`
 */
export function xyz(q: Readonly<Quaternion>): [number, number, number] {
  const { x, y, z } = q;

  return [x, y, z];
}
