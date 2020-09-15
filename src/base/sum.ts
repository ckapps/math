/**
 * @param numbers The numbers to sum up
 *
 * @returns
 * The sum of the given numbers
 */
export function sum(...numbers: number[]) {
  return numbers.reduce((acc, cur) => (acc += cur), 0);
}
