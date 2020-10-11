import { subtract as _subtract } from '../../base/subtract';

/**
 * @param numbers The numbers to subtract
 *
 * @returns
 * Inversion operation to `sum`.
 */
export function subtract(numbers: number[]) {
  return _subtract(...numbers);
}
