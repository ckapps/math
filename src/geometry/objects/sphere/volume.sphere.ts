const factor = (4 / 3) * Math.PI;

/**
 * Based on `V = 4/3 * π * r^3`
 *
 * @param radius
 *
 * @returns
 * Volume of a sphere with `radius`
 */
export function volume(radius: number) {
  return factor * Math.pow(radius, 3);
}
