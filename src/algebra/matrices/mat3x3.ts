import { vec2 } from '../vector2';

// --------------------------------------------------------
// Types
// --------------------------------------------------------

// prettier-ignore
export type mat3x3 = [
  number, number, number,
  number, number, number,
  number, number, number,
];

type mat3x3r = Readonly<mat3x3>;

// --------------------------------------------------------
// Constants
// --------------------------------------------------------

/**
 * 3x3 identity matrix
 */
// prettier-ignore
export const identity = Object.freeze<mat3x3>([
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
]);

/**
 * 3x3 identity matrix
 */
// prettier-ignore
export const zero = Object.freeze<mat3x3>([
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
]);

// --------------------------------------------------------
// Functions
// --------------------------------------------------------

/**
 * Creates a translation matrix from the given `vector`
 *
 * @param vector
 * 2 dimensional vector describing the translation
 *
 * @returns
 * A translation matrix
 */
export function translation([x, y]: vec2): mat3x3 {
  // prettier-ignore
  return [
    1, 0, 0,
    0, 1, 0,
    x, y, 1
  ];
}

/**
 * Creates a rotation matrix with a rotation defined by `radians`.
 *
 * @param radians
 * The angle in radians that the rotation should represents
 *
 * @returns
 * A rotation matrix
 */
export function rotation(radians: number): mat3x3 {
  const c = Math.cos(radians);
  const s = Math.sin(radians);

  // prettier-ignore
  return [
    c,-s, 0,
    s, c, 0,
    0, 0, 1,
  ];
}

/**
 * Creates a scaling matrix from the given `vector`
 *
 * @param vector
 * Vector that describes the scaling in `x` and `y` direction
 *
 * @returns
 * A scaling matrix
 */
export function scaling([x, y]: vec2): mat3x3 {
  // prettier-ignore
  return [
    x, 0, 0,
    0, y, 0,
    0, 0, 1,
  ];
}

/**
 * Multiplies matrix `a` with matrix `b`
 *
 * @param a The first matrix
 * @param b The second matrix
 *
 * @returns
 * The result of the matrix multiplication
 */
export function multiply(a: mat3x3r, b: mat3x3r): mat3x3 {
  const a00 = a[0 * 3 + 0];
  const a01 = a[0 * 3 + 1];
  const a02 = a[0 * 3 + 2];
  const a10 = a[1 * 3 + 0];
  const a11 = a[1 * 3 + 1];
  const a12 = a[1 * 3 + 2];
  const a20 = a[2 * 3 + 0];
  const a21 = a[2 * 3 + 1];
  const a22 = a[2 * 3 + 2];
  const b00 = b[0 * 3 + 0];
  const b01 = b[0 * 3 + 1];
  const b02 = b[0 * 3 + 2];
  const b10 = b[1 * 3 + 0];
  const b11 = b[1 * 3 + 1];
  const b12 = b[1 * 3 + 2];
  const b20 = b[2 * 3 + 0];
  const b21 = b[2 * 3 + 1];
  const b22 = b[2 * 3 + 2];

  // prettier-ignore
  return [
      b00 * a00 + b01 * a10 + b02 * a20,
      b00 * a01 + b01 * a11 + b02 * a21,
      b00 * a02 + b01 * a12 + b02 * a22,
      b10 * a00 + b11 * a10 + b12 * a20,
      b10 * a01 + b11 * a11 + b12 * a21,
      b10 * a02 + b11 * a12 + b12 * a22,
      b20 * a00 + b21 * a10 + b22 * a20,
      b20 * a01 + b21 * a11 + b22 * a21,
      b20 * a02 + b21 * a12 + b22 * a22,
    ];
}
