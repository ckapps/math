export function scale<T extends number[]>(numbers: T): (scalar: number) => T;
export function scale(numbers: number[]): (scalar: number) => number[];

/**
 * @param numbers An array of numbers
 *
 * @returns
 * A function that takes a scalar as an argument.
 * When called, the functino will return an array of numbers with
 * the same size as `numbers`, where each element is multiplied
 * by the passed `scalar`.
 */
export function scale(numbers: number[]): (scalar: number) => number[] {
  return scalar => numbers.map(n => n * scalar);
}
