import { magnitude } from './magnitude';
import { subtract } from './subtract';
import { vectorNr } from './vector.types';

/**
 * @param a Point `a`
 * @param b Point `b`
 *
 * @returns
 * The distance between `a` and `b`.
 */
export function distance(a: vectorNr, b: vectorNr): number {
  return magnitude(subtract(a, b));
}
