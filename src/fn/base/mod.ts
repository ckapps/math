import { MonoOperatorFunction } from '../types/operator-function';

/**
 * @param modulus Modulus for the returned operations
 *
 * @returns
 * A `mod N` operator function, where `N` is the given `modulus`.
 *
 * @example
 * mod(4)(2) === 2 % 4 === 2
 * mod(4)(6) === 6 % 4 === 2
 */
export function mod(modulus: number): MonoOperatorFunction<number> {
  return n => n % modulus;
}
