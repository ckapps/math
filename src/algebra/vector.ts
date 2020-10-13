import { scale as _scale } from '../base';

import { map, every } from '../fn/array';
import {
  sum as sumFn,
  subtract as subtractFn,
  multiply as multiplyFn,
  min as minFn,
  max as maxFn,
} from '../fn/base';

// --------------------------------------------------------
// Types
// --------------------------------------------------------
type vectorN = number[];
type vectorNr = Readonly<vectorN>;

// --------------------------------------------------------
// Functions
// --------------------------------------------------------
/**
 * Length of this vector.
 * The length of the vector is square root of its components
 * `(x * x + y * y + z * z + ...)`.
 *
 * If comparing vector magnitudes is enough, please consider `sqrtMagnitude`
 *
 * @param vector The vector
 *
 * @returns
 * The length of `vector`
 */
export function magnitude(vector: vectorNr): number {
  return Math.sqrt(sqrtMagnitude(vector));
}

/**
 * @param vector The vector
 *
 * @returns
 * Length of `vector`, squared.
 */
export function sqrtMagnitude(vector: vectorNr) {
  return dot(vector, vector);
}

/**
 * Vector in its normalized form, meaning that the `magnitude`
 * of the result vector is `1`, but the orientation is preserved.
 *
 * @param vector The vector to normalize
 *
 * @returns
 * A vector with the same orientation as `vector` with a
 * `magnitude` of 1.
 */
export function normalized(vector: vectorNr) {
  return divide(vector, magnitude(vector));
}

/**
 * Scales all components of the vector by the given `scalar`.
 *
 * @param v The vector to scale
 * @param scalar The scalar used for scaling
 *
 * @returns
 * A new vector with each component scaled by `scalar`.
 */
export function scale(v: vectorNr, scalar: number): vectorN {
  return _scale(v, scalar);
}

/**
 * Divides all components of the vector by the given `scalar`.
 *
 * @param scalar The scalar used for dividing
 *
 * @returns
 * A new vector with each component inverse scaled by `scalar`.
 */
export function divide(v: vectorNr, scalar: number): vectorN {
  return scale(v, 1 / scalar);
}

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * The dot product of `a` and `b`.
 */
export function dot(a: vectorNr, b: vectorNr): number {
  return sumFn(map(multiplyFn)([a, b]));
}

/**
 * @param a Point `a`
 * @param b Point `b`
 *
 * @returns
 * The distance between `a` and `b`.
 */
export function distance(a: vectorNr, b: vectorNr): number {
  return magnitude(subtract(a, b));
}

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * `true`, if the components of vector `a` and `b` match.
 * Otherwise `false`.
 */
export function equals(a: vectorNr, b: vectorNr): boolean {
  return every((numbers: number[]) => numbers[0] === numbers[1])([a, b]);
}

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the minimum value for each component from all
 * components of all given `vectors`.
 */
export function min(...vectors: vectorNr[]): vectorN {
  return map(minFn)(vectors);
}

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the maximum value for each component from all
 * components of all given `vectors`.
 */
export function max(...vectors: vectorNr[]): vectorN {
  return map(maxFn)(vectors);
}

/**
 * Sums all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the sum of the same
 * component of all given `vectors`.
 */
export function add(...vectors: vectorNr[]): vectorN {
  return map(sumFn)(vectors);
}

/**
 * Subtracts all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the difference of the same
 * component of all given `vectors`.
 */
export function subtract(...vectors: vectorNr[]): vectorN {
  return map(subtractFn)(vectors);
}
