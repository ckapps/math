import { scale, sum } from '../base';

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

  public get magnitude() {
    return 0;
  }

  public get normalized() {
    return 0;
  }

  public get sqrMagnitude() {
    return 0;
  }

  public dot() {
    return 0;
  }
  public cross() {
    return 0;
  }

  /**
   * Sums all values of the same vector component.
   *
   * @param others Array of vectors to add
   *
   * @returns
   * A new instance of `Vector`
   */
  public add<T extends Vector>(...others: T[]): Vector {
    return Vector.add(Vector, this, ...others);
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
    return new Vector(...scale(this._components, scalar));
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

  /**
   * Sums all values of the same vector component.
   *
   * @param others Array of vectors to add
   *
   * @returns
   * A new instance of `Vector`
   */
  public static add(...others: Vector[]) {
    return new Vector(...Vector.map(others, (_, numbers) => sum(...numbers)));
  }

  /**
   * @param vectors Array of vectors
   *
   * @returns
   * A new instance of vector with the minimum values for each component
   */
  public static min(...vectors: Vector[]) {
    return new Vector(...Vector.map(vectors, (_, n) => Math.min(...n)));
  }

  /**
   * @param vectors Array of vectors
   *
   * @returns
   * A new instance of vector with the maximum values for each component
   */
  public static max(...vectors: Vector[]) {
    return new Vector(...Vector.map(vectors, (_, n) => Math.max(...n)));
  }

  protected static forEach(
    vectors: Vector[],
    fn: (index: number, numbers: number[]) => number,
  ) {
    const length = Math.max(...vectors.map(v => v._components.length));

    const components = new Array(length);
    for (let i = 0; i < length; ++i) {
      fn(
        i,
        vectors.map(v => v._components[i]),
      );
    }

    return components;
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
