import { MonoOperatorFunction } from '../types/operator-function';

/**
 * @param base Base
 *
 * @returns
 * The expotential function that takes the exponent
 * as a parameter and applies on the given `base`.
 */
export function exponential(base: number): MonoOperatorFunction<number> {
  return exp => Math.pow(base, exp);
}
