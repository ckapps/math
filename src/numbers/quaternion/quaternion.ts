import { vec3 } from '../../algebra/vector3';

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
