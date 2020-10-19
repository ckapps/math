import { dot } from './dot';
import { vectorNr } from './vector.types';

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
