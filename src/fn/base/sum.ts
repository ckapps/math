import { sum as _sum } from '../../base/sum';

/**
 * @param numbers The numbers to sum up
 *
 * @returns
 * The sum of the given `numbers`
 */
export function sum(numbers: number[]) {
  return _sum(...numbers);
}
