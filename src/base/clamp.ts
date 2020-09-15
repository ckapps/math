/**
 * @param min The minimum value
 * @param max The maximum value
 * @param value The value to clamp
 *
 * @returns
 * If `value` is less than `min`, `min` will be returned.
 * If `value` is greater than max`, `max` will be returned.
 * Otherwise `value` will be returned.
 */
export function clamp(min: number, max: number, value: number): number {
  return Math.max(min, Math.min(max, value));
}
