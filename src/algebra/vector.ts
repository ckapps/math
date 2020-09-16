import { scale, sum } from '../base';
import { create } from './vector_base';

/**
 * a
 */
export class Vector {
  protected _components: number[];

  constructor(...components: number[]) {
    this._components = components;
  }

  public get components() {
    return this._components;
  }
  public set components(value: number[]) {
    this._components = value;
  }

  /**
   * Length of this vector
   * The length of the vector is square root of `(x*x+y*y+z*z)`.
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
    return this.dot(this);
  }

  public get normalized() {
    return this.divide(this.magnitude);
  }

  public dot(other: Vector) {
    return Vector.map([this, other], (_, n) =>
      n.reduce((acc, cur) => acc * cur),
    ).reduce((acc, cur) => acc + cur);
  }

  /**
   * Sums all values of the same vector component.
   *
   * @param others Array of vectors to add
   *
   * @returns
   * A new instance of `Vector`
   */
  public add(...others: Vector[]) {
    return Vector.add(this, ...others);
  }

  /**
   * Scales all components of the vector by the given `scalar`.
   *
   * @param scalar The scalar used for scaling
   *
   * @returns
   * A new instance of `Vector`
   */
  public scale(scalar: number) {
    return create(scale(this._components, scalar));
  }

  /**
   * Divides all components of the vector by the given `scalar`.
   *
   * @param scalar The scalar used for dividing
   *
   * @returns
   * A new instance of `Vector`
   */
  public divide(scalar: number) {
    return this.scale(1 / scalar);
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
   * @param vectors Array of vectors
   *
   * @returns
   * A new instance of vector with the minimum values for each component
   */
  public static min(...vectors: Vector[]) {
    return create(Vector.map(vectors, (_, n) => Math.min(...n)));
  }

  /**
   * @param vectors Array of vectors
   *
   * @returns
   * A new instance of vector with the maximum values for each component
   */
  public static max(...vectors: Vector[]) {
    return create(Vector.map(vectors, (_, n) => Math.max(...n)));
  }

  public static equals(a: Vector, b: Vector) {
    return Vector.every([a, b], (_, numbers) => numbers[0] === numbers[1]);
  }

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

  protected static forEach(
    vectors: Vector[],
    fn: (index: number, numbers: number[]) => void,
  ) {
    Vector.forEachAbort(vectors, (_, numbers) => {
      fn(_, numbers);
      return true; // Don't abort
    });
  }

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
