import { addFactory } from './vector_base';
import { Vector } from './vector';

/**
 * Representation of 3-dimensional vectors and points
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class Vector3 extends Vector {
  /**
   * Type guard to prevent mixing Vectors of
   * different dimensions
   */
  private __vector3__ = true;

  constructor(x: number, y: number, z: number) {
    super(x, y, z);
  }

  /** The x component */
  public get x() {
    return this._components[0];
  }
  public set x(value: number) {
    this._components[0] = value;
  }

  /** The y component */
  public get y() {
    return this._components[1];
  }
  public set y(value: number) {
    this._components[1] = value;
  }

  /** The z component */
  public get z() {
    return this._components[2];
  }
  public set z(value: number) {
    this._components[2] = value;
  }

  public toString() {
    return `Vector3[${this.components.join(',')}]`;
  }

  // ============================================
  // Static
  // ============================================
  /**
   * Calculates the cross product of both vectors.
   *
   * @param b The other vector
   *
   * @returns
   * A vector that is perpendicular to `this` and `other`
   */
  public static cross(a: Vector3, b: Vector3) {
    return new Vector3(
      a.y * b.z - a.z * b.y,
      a.z * b.x - a.x * b.z,
      a.x * b.y - a.y * b.x,
    );
  }

  /**
   * Vector3(0, 0, 0).
   */
  public static get zero() {
    return new Vector3(0, 0, 0);
  }
  /**
   * Vector3(1, 1, 1).
   */
  public static get one() {
    return new Vector3(1, 1, 1);
  }
  /**
   * Vector3(0, 1, 0).
   */
  public static get up() {
    return new Vector3(0, 1, 0);
  }
  /**
   * Vector3(0, -1, 0).
   */
  public static get down() {
    return new Vector3(0, -1, 0);
  }
  /**
   * Vector3(-1, 0, 0).
   */
  public static get left() {
    return new Vector3(-1, 0, 0);
  }
  /**
   * Vector3(1, 0, 0).
   */
  public static get right() {
    return new Vector3(1, 0, 0);
  }
  /**
   * Vector3(1, 0, 0).
   */
  public static get forward() {
    return new Vector3(0, 0, 1);
  }
  /**
   * Vector3(1, 0, 0).
   */
  public static get backward() {
    return new Vector3(0, 0, -1);
  }

  // ============================================
  // Override for type safety
  // ============================================
  public static add(...others: Vector3[]) {
    return Vector.add(...others);
  }

  public static scale(v: Vector3, scalar: number) {
    return Vector.scale(v, scalar);
  }

  public static divide(v: Vector3, scalar: number) {
    return Vector.divide(v, scalar);
  }

  public static dot(a: Vector3, b: Vector3) {
    return Vector.dot(a, b);
  }

  public static min(...others: Vector3[]): Vector3 {
    return Vector.min(...others);
  }

  public static max(...others: Vector3[]): Vector3 {
    return Vector.max(...others);
  }
}

/**
 * Let the vector know, that there is a
 * specific factory for creating a 2 dimensional
 * vector
 */
addFactory(3, Vector3);
