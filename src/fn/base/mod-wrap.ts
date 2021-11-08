import { mod } from './mod';

/**
 * @param modulus Modulus for wrapping
 *
 * @returns
 * A function that wraps any given value `n` using the given `modulus`,
 * so that negative values will be wrapped to positive modulo values.
 *
 * @example
 * modWrap(3)(-3) === 0
 * modWrap(3)(-2) === 1
 * modWrap(3)(-1) === 2
 * modWrap(3)( 0) === 0
 * modWrap(3)( 1) === 1
 * modWrap(3)( 2) === 2
 * modWrap(3)( 3) === 3
 */
export function modWrap(modulus: number) {
  const modOperator = mod(modulus);
  return (n: number) => modOperator(modulus + modOperator(n));
}
