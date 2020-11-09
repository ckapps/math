const factor = Math.PI / 3;

/**
 * Based on `V = π/3 * h * r^2`
 *
 * @param radius Radius of the base circle
 * @param height Height of the cone
 *
 * @returns
 * Volume of a cone with `radius` and `height`.
 */
export function volume(radius: number, height: number) {
  return factor * height * Math.pow(radius, 2);
}
