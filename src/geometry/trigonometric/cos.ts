/**
 * @param values Numeric expressions to be evaluated
 *
 * @returns
 * The cosinus for each supplied numeric expressions
 */
export function cos<T extends number[]>(values: T): T;
export function cos(values: number[]): number[];

export function cos(values: number[]): number[] {
  return values.map(Math.cos);
}
