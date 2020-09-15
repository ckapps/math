import { RAD_TO_DEG } from './constants';

/**
 * @param radians Angle in radians
 *
 * @returns
 * Radians in degrees
 */
export function radToDeg(radians: number) {
  return radians * RAD_TO_DEG;
}
