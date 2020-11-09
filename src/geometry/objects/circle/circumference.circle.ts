const factor = 2 * Math.PI;

/**
 * Based on `U = 2π * r`
 *
 * @param radius Radius of the circle
 *
 * @returns
 * The circumference of a circle with `radius`
 */
export function circumference(radius: number) {
  return factor * radius;
}
