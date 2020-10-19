/**
 * Export the real functions from vector
 */
export * from './vector';

// --------------------------------------------------------
// Types
// --------------------------------------------------------
/**
 * Represents a 3 dimensional vector
 */
export type vec3 = [number, number, number];
/**
 * readonly vec3
 */
type vec3r = Readonly<vec3>;

// --------------------------------------------------------
// Constants
// --------------------------------------------------------
/**
 * 3D vector (0, 0, 0)
 */
export const zero = Object.freeze<vec3>([0, 0, 0]);

/**
 * 3D vector (1, 1, 1)
 */
export const one = Object.freeze<vec3>([1, 1, 1]);

/**
 * 3D vector (0, 1, 0)
 */
export const up = Object.freeze<vec3>([0, 1, 0]);

/**
 * 3D vector (0, -1, 0)
 */
export const down = Object.freeze<vec3>([0, -1, 0]);

/**
 * 3D vector (1, 0, 0)
 */
export const right = Object.freeze<vec3>([1, 0, 0]);

/**
 * 3D vector (-1, 0, 0)
 */
export const left = Object.freeze<vec3>([-1, 0, 0]);

/**
 * 3D vector (0, 0, 1)
 */
export const forward = Object.freeze<vec3>([0, 0, 1]);

/**
 * 3D vector (0, 0, -1)
 */
export const backward = Object.freeze<vec3>([0, 0, -1]);

// --------------------------------------------------------
// Functions
// --------------------------------------------------------
/**
 * Calculates the cross product of both vectors.
 *
 * @param a The first vector
 * @param b The other vector
 *
 * @returns
 * A vector that is perpendicular to `a` and `b`.
 */
export function cross(a: vec3r, b: vec3r): vec3 {
  const [ax, ay, az] = a;
  const [bx, by, bz] = b;

  // prettier-ignore
  return [
    ay * bz - az * by,
    az * bx - ax * bz,
    ax * by - ay * bx,
  ];
}

// --------------------------------------------------------
// Declarations
// --------------------------------------------------------
/**
 * Length of this vector.
 * The length of the vector is square root of its components
 * `(x * x + y * y + z * z)`.
 *
 * If comparing vector magnitudes is enough, please consider `sqrtMagnitude`
 *
 * @param vector The vector
 *
 * @returns
 * The length of `vector`
 */
export declare function magnitude(vector: vec3r): number;

/**
 * @param vector The vector
 *
 * @returns
 * Length of `vector`, squared.
 */
export declare function sqrtMagnitude(vector: vec3r): number;

/**
 * Vector in its normalized form, meaning that the `magnitude`
 * of the result vector is `1`, but the orientation is preserved.
 *
 * @param vector The vector to normalize
 *
 * @returns
 * A vector with the same orientation as `vector` with a
 * `magnitude` of 1.
 */
export declare function normalized(vector: vec3r): vec3;

/**
 * Scales all components of the vector by the given `scalar`.
 *
 * @param v The vector to scale
 * @param scalar The scalar used for scaling
 *
 * @returns
 * A new vector with each component scaled by `scalar`.
 */
export declare function scale(v: vec3r, scalar: number): vec3;

/**
 * Divides all components of the vector by the given `scalar`.
 *
 * @param scalar The scalar used for dividing
 *
 * @returns
 * A new vector with each component inverse scaled by `scalar`.
 */
export declare function divide(v: vec3r, scalar: number): vec3;

/**
 * The dot product is defined as `|a| |b| cos(phi)`.
 * This method is only applicable for cartesian coordinates.
 *
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * The dot product of `a` and `b`.
 */
export declare function dot(a: vec3r, b: vec3r): number;

/**
 * @param a Point `a`
 * @param b Point `b`
 *
 * @returns
 * The distance between `a` and `b`.
 */
export declare function distance(a: vec3r, b: vec3r): number;

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * The angle between vectors `a` and `b`.
 */
export declare function angle(a: vec3r, b: vec3r): number;

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * `true`, if the components of vector `a` and `b` match.
 * Otherwise `false`.
 */
export declare function equals(a: vec3r, b: vec3r): boolean;

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the minimum value for each component from all
 * components of all given `vectors`.
 */
export declare function min(...vectors: vec3r[]): vec3;

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the maximum value for each component from all
 * components of all given `vectors`.
 */
export declare function max(...vectors: vec3r[]): vec3;

/**
 * Sums all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the sum of the same
 * component of all given `vectors`.
 */
export declare function add(...vectors: vec3r[]): vec3;

/**
 * Subtracts all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the difference of the same
 * component of all given `vectors`.
 */
export declare function subtract(...vectors: vec3r[]): vec3;
