import { multiply as _multply } from '../../base/multiply';

/**
 * @param numbers The numbers to multiply
 *
 * @returns
 * The product of the given `numbers`
 */
export function multiply(numbers: number[]) {
  return _multply(...numbers);
}
