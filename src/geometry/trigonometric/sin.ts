/**
 * @param values Numeric expressions to be evaluated
 *
 * @returns
 * The sinus for each supplied numeric expressions
 */
export function sin<T extends number[]>(values: T): T;
export function sin(values: number[]): number[];

export function sin(values: number[]): number[] {
  return values.map(Math.sin);
}
