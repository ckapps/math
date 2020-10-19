import { dot } from './dot';
import { magnitude } from './magnitude';
import { vectorNr } from './vector.types';

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * The angle between vectors `a` and `b`.
 */
export function angle(a: vectorNr, b: vectorNr): number {
  const cosPhi = dot(a, b) / (magnitude(a) * magnitude(b));

  return Math.acos(cosPhi);
}
