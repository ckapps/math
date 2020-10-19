import { map } from '../../fn/array';
import { sum as _sum } from '../../fn/base';
import { vectorN, vectorNr } from './vector.types';

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
  return map(_sum)(vectors);
}
