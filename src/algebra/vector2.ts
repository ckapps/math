/**
 * Export the real functions from vector
 */
export * from './vector';

// --------------------------------------------------------
// Types
// --------------------------------------------------------
/**
 * Represents a 2 dimensional vector
 */
export type vec2 = [number, number];
/**
 * readonly vec2
 */
type vec2r = Readonly<vec2>;

// --------------------------------------------------------
// Constants
// --------------------------------------------------------
/**
 * 2D vector (0, 0)
 */
export const zero = Object.freeze<vec2>([0, 0]);

/**
 * 2D vector (1, 1)
 */
export const one = Object.freeze<vec2>([1, 1]);

/**
 * 2D vector (0, 1)
 */
export const up = Object.freeze<vec2>([0, 1]);

/**
 * 2D vector (0, -1)
 */
export const down = Object.freeze<vec2>([0, -1]);

/**
 * 2D vector (1, 0)
 */
export const right = Object.freeze<vec2>([1, 0]);

/**
 * 2D vector (-1, 0)
 */
export const left = Object.freeze<vec2>([-1, 0]);

// --------------------------------------------------------
// Declarations
// --------------------------------------------------------
/**
 * Length of this vector.
 * The length of the vector is square root of its components
 * `(x * x + y * y)`.
 *
 * If comparing vector magnitudes is enough, please consider `sqrtMagnitude`
 *
 * @param vector The vector
 *
 * @returns
 * The length of `vector`
 */
export declare function magnitude(vector: vec2r): number;

/**
 * @param vector The vector
 *
 * @returns
 * Length of `vector`, squared.
 */
export declare function sqrtMagnitude(vector: vec2r): number;

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
export declare function normalized(vector: vec2r): vec2;

/**
 * Scales all components of the vector by the given `scalar`.
 *
 * @param v The vector to scale
 * @param scalar The scalar used for scaling
 *
 * @returns
 * A new vector with each component scaled by `scalar`.
 */
export declare function scale(v: vec2r, scalar: number): vec2;

/**
 * Divides all components of the vector by the given `scalar`.
 *
 * @param scalar The scalar used for dividing
 *
 * @returns
 * A new vector with each component inverse scaled by `scalar`.
 */
export declare function divide(v: vec2r, scalar: number): vec2;

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * The dot product of `a` and `b`.
 */
export declare function dot(a: vec2r, b: vec2r): number;

/**
 * @param a Point `a`
 * @param b Point `b`
 *
 * @returns
 * The distance between `a` and `b`.
 */
export declare function distance(a: vec2r, b: vec2r): number;

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * The angle between vectors `a` and `b`.
 */
export declare function angle(a: vec2r, b: vec2r): number;

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * `true`, if the components of vector `a` and `b` match.
 * Otherwise `false`.
 */
export declare function equals(a: vec2r, b: vec2r): boolean;

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the minimum value for each component from all
 * components of all given `vectors`.
 */
export declare function min(...vectors: vec2r[]): vec2;

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the maximum value for each component from all
 * components of all given `vectors`.
 */
export declare function max(...vectors: vec2r[]): vec2;

/**
 * Sums all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the sum of the same
 * component of all given `vectors`.
 */
export declare function add(...vectors: vec2r[]): vec2;

/**
 * Subtracts all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the difference of the same
 * component of all given `vectors`.
 */
export declare function subtract(...vectors: vec2r[]): vec2;
