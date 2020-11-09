import { area as circleArea } from '../circle/area.circle';

/**
 * Based on `V = π * h * r^2`
 *
 * @param radius Radius of the cylinder
 * @param height Height of the cylinder
 *
 * @returns
 * Volume of the cylinder with `radius` and `height`.
 */
export function volume(radius: number, height: number) {
  return circleArea(radius) * height;
}
