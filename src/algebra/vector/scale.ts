import { scale as _scale } from '../../base';

import { vectorN, vectorNr } from './vector.types';

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
