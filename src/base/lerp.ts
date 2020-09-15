import { clamp } from './clamp';

/**
 * Interpolates a value between `start` and `end` by `t`.
 * The parameter `t` is clamped to the range [0, 1].
 *
 * @param start The start value
 * @param end The end value
 * @param t Interpolation value
 *
 * @returns
 * Interpolated value, equals to `start + (end - start) * t`
 *
 * @example
 * lerp(10, 20, 0); // returns 10
 * lerp(10, 20, 1); // returns 20
 * lerp(10, 20, 0.5); // returns 15
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * clamp(0, 1, t);
}
