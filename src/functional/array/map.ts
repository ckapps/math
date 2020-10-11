import { forEach } from './for-each';
import { ReadonlyArrays, Callback } from './types';

/**
 * @param projection
 * A projection function
 *
 * @returns
 * A function that takes an array of arrays as a parameter.
 * This function will call the projection for each index
 * with the items at the given index.
 */
export function map<T, R>(projection: Callback<T, R>) {
  return (arrays: ReadonlyArrays<T>) => {
    const result: R[] = [];

    forEach<T>((items, index, _arrays) => {
      result[index] = projection(items, index, _arrays);
    })(arrays);

    return result;
  };
}
