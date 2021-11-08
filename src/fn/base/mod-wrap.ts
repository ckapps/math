import { mod } from './mod';

/**
 * @param modulus Modulus for wrapping
 *
 * @returns
 * A function that wraps any given value `n` using the given `modulus`,
 * so that negative values will be wrapped to positive modulo values.
 *
 * @example
 * cycleIndex(3)(-3) === 0
 * cycleIndex(3)(-2) === 1
 * cycleIndex(3)(-1) === 2
 * cycleIndex(3)( 0) === 0
 * cycleIndex(3)( 1) === 1
 * cycleIndex(3)( 2) === 2
 * cycleIndex(3)( 3) === 3
 */
export function modWrap(modulus: number) {
  const modOperator = mod(modulus);
  return (n: number) => modOperator(Math.abs(modulus + modOperator(n)));
}
