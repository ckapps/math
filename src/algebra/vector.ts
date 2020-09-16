import { scale, sum } from '../base';
import { create } from './vector_base';

/**
 * Representation of n-dimensional vectors and points
 */
export class Vector {
  protected _components: number[];

  /**
   * Creates a new vector
   *
   * @param components The vector components
   */
  constructor(...components: number[]) {
    this._components = components;
  }

  /**
   * The vector components
   */
  public get components() {
    return this._components;
  }
  public set components(value: number[]) {
    this._components = value;
  }

  /**
   * Length of this vector.
   * The length of the vector is square root of its components
   * `(x * x + y * y + z * z + ...)`.
   *
   * If comparing vector magnitudes is enough, please consider `sqrtMagnitude`
   */
  public get magnitude() {
    return Math.sqrt(this.sqrtMagnitude);
  }

  /**
   * Length of this vector, squared.
   */
  public get sqrtMagnitude() {
    return Vector.dot(this, this);
  }

  /**
   * Vector in its normalized form, meaning that the `magnitude`
   * of the result vector is `1`, but the orientation is preserved.
   */
  public get normalized() {
    return Vector.divide(this, this.magnitude);
  }

  public toString() {
    return `Vector: ${this.components.join(',')}`;
  }

  // ============================================
  // static implementations
  // ============================================
  /**
   * Sums all values of the same vector component.
   *
   * @param others Array of vectors to add
   *
   * @returns
   * A new instance of `Vector`
   */
  public static add<T extends Vector>(...others: T[]): T {
    return create<T>(Vector.map(others, (_, numbers) => sum(...numbers)));
  }

  /**
   * Scales all components of the vector by the given `scalar`.
   *
   * @param v The vector to scale
   * @param scalar The scalar used for scaling
   *
   * @returns
   * A new instance of `Vector`
   */
  public static scale<T extends Vector>(v: T, scalar: number) {
    return create<T>(scale(v._components, scalar));
  }

  /**
   * Divides all components of the vector by the given `scalar`.
   *
   * @param scalar The scalar used for dividing
   *
   * @returns
   * A new instance of `Vector`
   */
  public static divide<T extends Vector>(v: T, scalar: number) {
    return Vector.scale(v, 1 / scalar);
  }

  /**
   * @param vectors Array of vectors
   *
   * @returns
   * A new instance of vector with the minimum values for each component
   */
  public static min<T extends Vector>(...vectors: T[]) {
    return create<T>(Vector.map(vectors, (_, n) => Math.min(...n)));
  }

  /**
   * @param vectors Array of vectors
   *
   * @returns
   * A new instance of vector with the maximum values for each component
   */
  public static max<T extends Vector>(...vectors: T[]) {
    return create<T>(Vector.map(vectors, (_, n) => Math.max(...n)));
  }

  /**
   * @param a First vector
   * @param b First vector
   *
   * @returns
   * The dot product of `this` and `other`
   */
  public static dot(a: Vector, b: Vector) {
    return Vector.map([a, b], (_, n) =>
      n.reduce((acc, cur) => acc * cur),
    ).reduce((acc, cur) => acc + cur);
  }

  /**
   * @param a First vector
   * @param b Second vector
   *
   * @returns
   * `true`, if the components of vector `a` and `b` match.
   * Otherwise `false`.
   */
  public static equals(a: Vector, b: Vector) {
    return Vector.every([a, b], (_, numbers) => numbers[0] === numbers[1]);
  }

  /**
   * For each per vector component with the ability to abort by return `false` from `fn`.
   *
   * @param vectors Vectors on which `fn` should be executed
   * @param fn Callback
   */
  protected static forEachAbort(
    vectors: Vector[],
    fn: (index: number, numbers: number[]) => boolean,
  ) {
    const length = Math.max(...vectors.map(v => v._components.length));

    for (let i = 0; i < length; ++i) {
      const result = fn(
        i,
        vectors.map(v => v._components[i]),
      );

      if (result === false) {
        return;
      }
    }
  }

  /**
   * For each per vector component
   *
   * @param vectors Vectors on which `fn` should be executed
   * @param fn Callback
   */
  protected static forEach(
    vectors: Vector[],
    fn: (index: number, numbers: number[]) => void,
  ) {
    Vector.forEachAbort(vectors, (_, numbers) => {
      fn(_, numbers);
      return true; // Don't abort
    });
  }

  /**
   * @param vectors Vectors on which `fn` is executed
   * @param fn Callback
   *
   * @returns
   * `true`, if `fn` didn't return a falsy value.
   */
  protected static every(
    vectors: Vector[],
    fn: (index: number, numbers: number[]) => boolean,
  ): boolean {
    let fulfilled = true;

    Vector.forEachAbort(vectors, (_, numbers) => {
      const match = fn(_, numbers);
      if (!match) {
        fulfilled = false;
      }
      return fulfilled;
    });

    return fulfilled;
  }

  /**
   * Applies a projection function on every vector component
   * of the given `vectors`.
   *
   * @param vectors Vectors on which the `projection` is applied
   * @param project Projection function
   */
  protected static map<T>(
    vectors: Vector[],
    project: (index: number, numbers: number[]) => T,
  ): T[] {
    const components: T[] = [];

    Vector.forEach(vectors, (_, numbers) =>
      components.push(project(_, numbers)),
    );

    return components;
  }
}
