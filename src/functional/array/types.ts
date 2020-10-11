/**
 * Array of readonly arrays
 */
export type ReadonlyArrays<T> = Readonly<T[]>[];

/**
 * Callback for walking through an array of arrays
 */
export type Callback<T, R = void> = (
  elements: T[],
  index: number,
  arrays: ReadonlyArrays<T>,
) => R;
