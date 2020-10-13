import { OperatorFunction } from '../types/operator-function';

// --------------------------------------------------------
// Function overload list
// --------------------------------------------------------
export function expand<T, F, G>(
  f: OperatorFunction<T, F>,
  g: OperatorFunction<T, G>,
): OperatorFunction<T, [F, G]>;

export function expand<T, F, G, H>(
  f: OperatorFunction<T, F>,
  g: OperatorFunction<T, G>,
  h: OperatorFunction<T, H>,
): OperatorFunction<T, [F, G, H]>;

export function expand<T, F, G, H, I>(
  f: OperatorFunction<T, F>,
  g: OperatorFunction<T, G>,
  h: OperatorFunction<T, H>,
  i: OperatorFunction<T, I>,
): OperatorFunction<T, [F, G, H, I]>;

export function expand<T, F, G, H, I, J>(
  f: OperatorFunction<T, F>,
  g: OperatorFunction<T, G>,
  h: OperatorFunction<T, H>,
  i: OperatorFunction<T, I>,
  j: OperatorFunction<T, J>,
): OperatorFunction<T, [F, G, H, I, J]>;

export function expand<T, R>(
  ...fns: OperatorFunction<T, R>[]
): OperatorFunction<T, R[]>;

// --------------------------------------------------------
// Implementation
// --------------------------------------------------------
/**
 * @param fns Array of functions
 *
 * @returns
 * A function that takes an argument that is passed to every
 * function in `fns`. The return value of the function is
 * an array of the return values produced by `fns` in the
 * same order.
 */
export function expand<T, R>(
  ...fns: OperatorFunction<T, R>[]
): OperatorFunction<T, R[]> {
  return x => fns.map(fn => fn(x));
}
