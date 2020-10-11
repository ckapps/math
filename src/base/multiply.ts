/**
 * @param numbers The numbers to multiply
 *
 * @returns
 * The product of the given `numbers`
 */
export function multiply(...numbers: number[]) {
  return numbers.reduce((acc, cur) => (acc *= cur), 1);
}
