import { divide as _divide } from '../../base/divide';

/**
 * @param numbers The numbers to divide
 *
 * @returns
 * The quotient of the given `numbers`.
 */
export function divide(numbers: number[]) {
  return _divide(...numbers);
}
