import { circumference as circleCircumference } from '../circle/circumference.circle';

/**
 * Based on `Sl = 2π * r * h`
 *
 * @param radius Radius of the cylinder
 * @param height Height of the cylinder
 *
 * @returns
 * The lateral surface area of a cylinder with `radius` and `height`.
 */
export function lateralSurfaceArea(radius: number, height: number) {
  return circleCircumference(radius) * height;
}
