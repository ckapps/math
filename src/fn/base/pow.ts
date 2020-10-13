import { MonoOperatorFunction } from '../types/operator-function';

/**
 * @param exp The exponent
 *
 * @returns
 * Function that takes a number as an argument and returns
 * the result of raising this number to the power of
 * `exp`.
 */
export function pow(exp: number): MonoOperatorFunction<number> {
  return v => Math.pow(v, exp);
}
