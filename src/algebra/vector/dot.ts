import { map } from '../../fn/array';
import { sum, multiply } from '../../fn/base';

import { vectorNr } from './vector.types';

/**
 * The dot product is defined as `|a| |b| cos(phi)`.
 * This method is only applicable for cartesian coordinates.
 *
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * The dot product of `a` and `b`.
 */
export function dot(a: vectorNr, b: vectorNr): number {
  return sum(map(multiply)([a, b]));
}
