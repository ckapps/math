import { clamp } from '../../base';
import { chain, clamp as clampFn } from '../../functional/base';

import { Quaternion } from './quaternion';
import { add, scale, normalize, dot, divideBy, invertSign } from './operators';

/**
 * Linear interpolation between quaternions `a` and `b`.
 * The parameter `t` defines the ratio.
 *
 * @param a Quaternion 1
 * @param b Quaternion 2
 * @param t Ratio of interpolation. The value is clamped between [0, 1].
 */
export function lerp(
  a: Readonly<Quaternion>,
  b: Readonly<Quaternion>,
  t: number,
) {
  return chain(
    normalize,
    (q: [Quaternion, Quaternion]) => add(q[0], q[1]),
    (_t: number): [Quaternion, Quaternion] => [scale(a, 1 - _t), scale(b, _t)],
    clampFn(),
  )(t);
}

/**
 * Spherical linear interpolation between quaternions `a` and `b`.
 * The parameter `t` defines the ratio.
 *
 * @param a Quaternion 1
 * @param b Quaternion 2
 * @param t Ratio of interpolation. The value is clamped between [0, 1].
 */
export function slerp(
  a: Readonly<Quaternion>,
  b: Readonly<Quaternion>,
  t: number,
) {
  // dot = cos(theta)
  let dotProduct = dot(a, b);
  let q3: Quaternion;

  // if (dot < 0), q1 and q2 are more than 90 degrees apart,
  // so we can invert one to reduce spinning
  if (dotProduct < 0) {
    dotProduct = -dotProduct;
    q3 = invertSign(b);
  } else {
    q3 = b;
  }

  // use linear interpolation for small angles
  if (dotProduct >= 0.95) {
    return lerp(a, q3, t);
  }

  const _t = clamp(0, 1, t);
  const angle = Math.acos(dotProduct);

  const qa = scale(a, Math.sin(angle * (1 - _t)));
  const qb = scale(q3, Math.sin(angle * _t));

  return divideBy(add(qa, qb), Math.sin(angle));
}
