/**
 * Implementation of the heaviside function (or unit step function).
 * It is a discontinuous function, that returns `0` for negative values
 * and `1` for non-negative values.
 *
 * @param value Value
 *
 * @returns
 * `0` for negative values, otherwise `1`.
 */
export function heaviside(value: number) {
  return value < 0 ? 0 : 1;
}
