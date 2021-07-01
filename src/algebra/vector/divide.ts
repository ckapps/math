import { scale } from './scale';
import { vectorNr } from './vector.types';

/**
 * Divides all components of the vector by the given `scalar`.
 *
 * @param scalar The scalar used for dividing
 *
 * @returns
 * A new vector with each component inverse scaled by `scalar`.
 */
export function divide<T extends vectorNr>(v: T, scalar: number): T;
export function divide(v: vectorNr, scalar: number): vectorNr;

export function divide(v: vectorNr, scalar: number): vectorNr {
  return scale(v, 1 / scalar);
}
