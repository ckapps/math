import { MonoOperatorFunction } from '../types/operator-function';
import { polynomial } from './polynom';

/**
 * Creates a linear function `f(x) = ax + b`
 * where `a` is the `slope`.
 *
 * @param slope Slope of the line
 * @param b Offset from the axis
 *
 * @returns
 * The linear function with a fixed slope and coefficient `b` that takes
 * `x` as an argument.
 */
export function linear(slope: number, b: number): MonoOperatorFunction<number> {
  return polynomial([b, slope]);
}
