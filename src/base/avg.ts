import { sum } from './sum';

/**
 * @param numbers The numbers from which to build the average from
 *
 * @returns
 * The average from the range of given numbers
 */
export function avg(...numbers: number[]): number {
  return sum(...numbers) / numbers.length;
}
