import { vectorNr } from './vector.types';
import { scale } from './scale';

/**
 * @param scalar Scalar by which the components of the vector should be scaled
 *
 * @returns
 * Function that is called with a vector and that returns a new vector
 * where each component is scaled by the given `scalar`.
 */
export function scaleBy(scalar: number) {
  return (v: vectorNr) => scale(v, scalar);
}
