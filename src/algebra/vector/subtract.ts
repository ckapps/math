import { map } from '../../fn/array';
import { subtract as _subtract } from '../../fn/base';

import { vectorNr } from './vector.types';

/**
 * Subtracts all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the difference of the same
 * component of all given `vectors`.
 */
export function subtract<T extends vectorNr>(...vectors: T[]): T;
export function subtract(...vectors: vectorNr[]): vectorNr;

export function subtract(...vectors: vectorNr[]): vectorNr {
  return map(_subtract)(vectors);
}
