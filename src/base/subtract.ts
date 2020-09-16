/**
 * @param numbers The numbers to subtract
 *
 * @returns
 * Inversion operation to `sum`.
 */
export function subtract(...numbers: number[]) {
  const [currentValue, ...others] = numbers;
  return others.reduce((acc, cur) => (acc -= cur), currentValue);
}
