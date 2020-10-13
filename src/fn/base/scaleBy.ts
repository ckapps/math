import { scale } from './scale';

/**
 * @param scalar A scalar
 *
 * @returns
 * A function that takes an array of numbers as an argument.
 * When called, the function will return an array of numbers with
 * the same size were each number is multiplied by the given `scalar`.
 */
export function scaleBy<T extends number[]>(scalar: number): (numbers: T) => T {
  return numbers => scale(numbers)(scalar);
}
