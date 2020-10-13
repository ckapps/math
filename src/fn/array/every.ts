import { ReadonlyArrays, Callback } from './types';

/**
 * @param predicate
 * A predicate function
 *
 * @returns
 * A function that takes an array of arrays as a parameter.
 * This function will return `true` if all items of all arrays
 * fullfill the given `predicate`, otherwise `false`
 */
export function every<T>(predicate: Callback<T, boolean>) {
  return (arrays: ReadonlyArrays<T>): boolean => {
    const length = Math.max(...arrays.map(({ length }) => length));

    for (let i = 0; i < length; ++i) {
      const result = predicate(
        arrays.map(a => a[i]),
        i,
        arrays,
      );

      if (result === false) {
        return false;
      }
    }

    return true;
  };
}
