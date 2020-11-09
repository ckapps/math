import { circumference as circleCircumference } from '../circle/circumference.circle';

/**
 * Based on `S = 2π * r * (r + h)`
 *
 * @param radius Radius of the cylinder
 * @param height Height of the cylinder
 *
 * @returns
 * The surface area of a cylinder with `radius` and `height`.
 */
export function surfaceArea(radius: number, height: number) {
  return circleCircumference(radius) * (height + radius);
}
