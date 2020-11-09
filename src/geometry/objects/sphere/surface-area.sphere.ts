import { area as circleArea } from '../circle/area.circle';

/**
 * Based on `S = 4 π r^2`
 *
 * @param radius Radius of the sphere
 *
 * @returns
 * Surface area of a sphere with `radius`
 */
export function surfaceArea(radius: number) {
  return 4 * circleArea(radius);
}
