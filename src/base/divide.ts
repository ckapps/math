/**
 * @param numbers The numbers to divide
 *
 * @returns
 * The quotient of the given `numbers`
 */
export function divide(...numbers: number[]) {
  const [currentValue, ...others] = numbers;

  return others.reduce((acc, cur) => acc / cur, currentValue);
}
