/**
 * Based on `S = π * r * (h^2 + r^2)^(1/2)`
 *
 * @param radius Radius of the cone
 * @param height Height of the cone
 *
 * @returns
 * Surface area of a cone with `radius` and `height`.
 */
export function surfaceArea(radius: number, height: number) {
  return (
    Math.PI * radius * Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))
  );
}
