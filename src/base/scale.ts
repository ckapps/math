/**
 * Scales every item of `values` by `scalar`.
 *
 * @param values The values to scale
 * @param scalar The factor with which is scaled
 *
 * @example
 * // a = 4, b = 6
 * const [a, b] = scale([2, 3], 2);
 */
export function scale(values: readonly number[], scalar: number) {
  return values.map(v => v * scalar);
}
