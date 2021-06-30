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

/**
 * @param other Other vector by which the dot product should by calculated
 *
 * @returns
 * A function that takes a vector and that returns the dot product
 * of this vector and `other`.
 *
 * @example
 * dotBy(b)(a) === dot(a, b)
 */
export function dotBy<T extends vectorNr>(other: T) {
  return (a: T) => dot(a, other);
}
