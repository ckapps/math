import { pow } from './pow';

/**
 * @param n The nth root
 *
 * @returns
 * Function that takes a number as a parameter and
 * returns the `n`th root of it.
 */
export function nthRoot(n: number) {
  return pow(1 / n);
}
