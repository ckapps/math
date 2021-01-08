import { map } from '../../fn/array';
import { subtract as _subtract } from '../../fn/base';

import { vectorN, vectorNr } from './vector.types';

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
  return map(_subtract)(vectors);
}