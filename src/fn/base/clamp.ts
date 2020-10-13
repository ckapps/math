import { MonoOperatorFunction } from '../types/operator-function';
import { clamp as _clamp } from '../../base/clamp';

/**
 * @param min The minimum value
 * @param max The maximum value
 *
 * @returns
 * A function that takes a number as an argument and
 * that returns a number with a value clamped between [min, max].
 */
export function clamp(min = 0, max = 1): MonoOperatorFunction<number> {
  return value => _clamp(min, max, value);
}
