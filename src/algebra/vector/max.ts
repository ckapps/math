import { map } from '../../fn/array';
import { max as _max } from '../../fn/base';

import { vectorN, vectorNr } from './vector.types';

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the maximum value for each component from all
 * components of all given `vectors`.
 */
export function max(...vectors: vectorNr[]): vectorN {
  return map(_max)(vectors);
}
