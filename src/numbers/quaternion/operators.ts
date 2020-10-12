import { sum } from '../../base';
import { chain } from '../../functional/base';

import { Quaternion, wxyz } from './quaternion';

// --------------------------------------------------------
// Operations with 1 quaternion
// --------------------------------------------------------
/**
 * Conjugates the given quaternion `q`
 *
 * @param q A quaternion
 */
export function conjugate(q: Readonly<Quaternion>) {
  const { w, x, y, z } = q;

  return new Quaternion(w, -x, -y, -z);
}

/**
 * @param q A quaternion
 *
 * @returns
 * The magnitude of the given quaternion `q`
 */
export function magnitude(q: Readonly<Quaternion>) {
  return Math.sqrt(sqrtMagnitude(q));
}

/**
 * @param q A quaternion
 *
 * @returns
 * The magnitude squared of the given quaternion `q`
 */
export function sqrtMagnitude(q: Readonly<Quaternion>) {
  return dot(q, q);
}

/**
 * Normalizes the given quaternion `q`, so that it has a
 * `magnitude` of 1.
 *
 * @param q A quaternion
 */
export function normalize(q: Readonly<Quaternion>) {
  return divideBy(q, magnitude(q));
}

/**
 * Inverts the given quaternion `q`
 *
 * @param q A quaternion
 */
// prettier-ignore
export const invert = chain(
  c => divideBy(c, sqrtMagnitude(c)),
  conjugate
);

/**
 * Scales the real numbers from the quaternion `q` by the given `scalar`.
 *
 * @param q A quaternion
 * @param scalar A scalar
 */
export function scale(q: Readonly<Quaternion>, scalar: number) {
  const { w, x, y, z } = q;

  // prettier-ignore
  return new Quaternion(
    w * scalar,
    x * scalar,
    y * scalar,
    z * scalar
  );
}

/**
 * Divides the real numbers from the quaternion `q` by the given `scalar`.
 *
 * @param q A quaternion
 * @param scalar A scalar
 */
export function divideBy(q: Readonly<Quaternion>, scalar: number) {
  return scale(q, 1 / scalar);
}

/**
 * @param q A quaternion
 *
 * @returns
 * A quaternion equivalent to `q` but with inverted signs on all reals.
 */
export function invertSign(q: Readonly<Quaternion>) {
  const { w, x, y, z } = q;

  return new Quaternion(-w, -x, -y, -z);
}

// --------------------------------------------------------
// Operations with more quaternions
// --------------------------------------------------------
/**
 * @param a Quaternion 1
 * @param b Quaternion 2
 *
 * @returns
 * The sum of the quaternions `a` and `b`.
 */
export function add(a: Readonly<Quaternion>, b: Readonly<Quaternion>) {
  const [aw, ax, ay, az] = wxyz(a);
  const [bw, bx, by, bz] = wxyz(b);

  // prettier-ignore
  return new Quaternion(
    aw + bw,
    ax + bx,
    ay + by,
    az + bz,
  );
}

/**
 * Subtracts a quaternion `b` from the quaternion `a`.
 *
 * @param a Quaternion 1
 * @param b Quaternion 2
 */
export function subtract(a: Readonly<Quaternion>, b: Readonly<Quaternion>) {
  return add(a, invertSign(b));
}

export function multiply(a: Readonly<Quaternion>, b: Readonly<Quaternion>) {
  const [aw, ax, ay, az] = wxyz(a);
  const [bw, bx, by, bz] = wxyz(b);

  // prettier-ignore
  return new Quaternion(
    aw * bw - ax * bx - ay * by - az * bz,
    aw * bx + ax * bw + ay * bz - az * by,
    aw * by + ay * bw + az * bx - ax * bz,
    aw * bz + az * bw + ax * by - ay * bx,
  );
}

export function divide(a: Readonly<Quaternion>, b: Readonly<Quaternion>) {
  return multiply(a, invert(b));
}

/**
 * @param a Quaternion 1
 * @param b Quaternion 2
 *
 * @returns
 * The dot product between quaternions `a` and `b`.
 */
export function dot(a: Readonly<Quaternion>, b: Readonly<Quaternion>) {
  const { w: aw, x: ax, y: ay, z: az } = a;
  const { w: bw, x: bx, y: by, z: bz } = b;

  return sum(aw * bw, ax * bx, ay * by, az * bz);
}
