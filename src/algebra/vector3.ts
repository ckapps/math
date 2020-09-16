import { Vector } from './vector';
import { addFactory } from './vector_base';

export class Vector3 extends Vector {
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

  constructor(x: number, y: number, z: number) {
    super(x, y, z);
  }

  public get x() {
    return this._components[0];
  }
  public set x(value: number) {
    this._components[0] = value;
  }

  public get y() {
    return this._components[1];
  }
  public set y(value: number) {
    this._components[1] = value;
  }

  public get z() {
    return this._components[2];
  }
  public set z(value: number) {
    this._components[2] = value;
  }

  // ============================================
  // Override for type safety - members
  // ============================================
  public add(...others: Vector3[]): Vector3;
  public add(...others: Vector[]): Vector {
    return super.add(...others);
  }

  public scale(scalar: number): Vector3;
  public scale(scalar: number): Vector {
    return super.scale(scalar);
  }

  public divide(scalar: number): Vector3;
  public divide(scalar: number): Vector {
    return super.divide(scalar);
  }

  public dot(other: Vector3): number;
  public dot(other: Vector) {
    return super.dot(other);
  }

  /**
   * Calculates the cross product of both vectors.
   *
   * @param other The other vector
   *
   * @returns
   * A vector that is perpendicular to `this` and `other`
   */
  public cross(other: Vector3) {
    return new Vector3(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x,
    );
  }
  public toString() {
    return `Vector3[${this.components.join(',')}]`;
  }
  // ============================================
  // Override for type safety - static
  // ============================================
  public static min(...others: Vector3[]): Vector3;
  public static min(...others: Vector[]): Vector {
    return Vector.min(...others);
  }

  public static max(...others: Vector3[]): Vector3;
  public static max(...others: Vector[]): Vector {
    return Vector.max(...others);
  }
}

/**
 * Let the vector know, that there is a
 * specific factory for creating a 2 dimensional
 * vector
 */
addFactory(3, Vector3);
