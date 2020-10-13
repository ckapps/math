import { ReadonlyArrays, Callback } from './types';

/**
 * @param callback
 * A callback function that is called with the items at each index
 *
 * @returns
 * A function that takes an array of arrays as a parameter.
 * When called, this function will call the provided `callback`
 * for every index.
 */
export function forEach<T>(callback: Callback<T>) {
  return (arrays: ReadonlyArrays<T>) => {
    const length = Math.max(...arrays.map(({ length }) => length));

    for (let i = 0; i < length; ++i) {
      callback(
        arrays.map(a => a[i]),
        i,
        arrays,
      );
    }
  };
}
