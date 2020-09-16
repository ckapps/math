import { Vector } from './vector';
import { addFactory } from './vector_base';

/**
 *
 */
export class Vector2 extends Vector {
  /**
   * Vector2(0, 0).
   */
  public static get zero() {
    return new Vector2(0, 0);
  }
  /**
   * Vector2(1, 1).
   */
  public static get one() {
    return new Vector2(1, 1);
  }
  /**
   * Vector2(0, 1).
   */
  public static get up() {
    return new Vector2(0, 1);
  }
  /**
   * Vector2(0, -1).
   */
  public static get down() {
    return new Vector2(0, -1);
  }
  /**
   * Vector2(-1, 0).
   */
  public static get left() {
    return new Vector2(-1, 0);
  }
  /**
   * Vector2(1, 0).
   */
  public static get right() {
    return new Vector2(1, 0);
  }

  /**
   * Creates a new two dimensional vector
   *
   * @param x The x component
   * @param y The y component
   */
  constructor(x: number, y: number) {
    super(x, y);
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

  // ============================================
  // Override for type safety - members
  // ============================================
  public add(...others: Vector2[]): Vector2;
  public add(...others: Vector[]): Vector {
    return super.add(...others);
  }

  public scale(scalar: number): Vector2;
  public scale(scalar: number): Vector {
    return super.scale(scalar);
  }

  public divide(scalar: number): Vector2;
  public divide(scalar: number): Vector {
    return super.divide(scalar);
  }

  public dot(other: Vector2): number;
  public dot(other: Vector) {
    return super.dot(other);
  }
  public toString() {
    return `Vector2[${this.components.join(',')}]`;
  }
  // ============================================
  // Override for type safety - static
  // ============================================
  public static min(...others: Vector2[]): Vector2;
  public static min(...others: Vector[]): Vector {
    return Vector.min(...others);
  }

  public static max(...others: Vector2[]): Vector2;
  public static max(...others: Vector[]): Vector {
    return Vector.max(...others);
  }
}

/**
 * Let the vector know, that there is a
 * specific factory for creating a 2 dimensional
 * vector
 */
addFactory(2, Vector2);
