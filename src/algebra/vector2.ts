import { addFactory } from './vector_base';
import { Vector } from './vector';

/**
 * Representation of 2-dimensional vectors and points
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class Vector2 extends Vector {
  /**
   * Type guard to prevent mixing Vectors of
   * different dimensions
   */
  private __vector2__ = true;

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

  public toString() {
    return `Vector2[${this.components.join(',')}]`;
  }
  // ============================================
  // Static
  // ============================================
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

  // ============================================
  // Override for type safety
  // ============================================
  public static add(...others: Vector2[]) {
    return Vector.add(...others);
  }

  public static scale(v: Vector2, scalar: number) {
    return Vector.scale(v, scalar);
  }

  public static divide(v: Vector2, scalar: number) {
    return Vector.divide(v, scalar);
  }

  public static dot(a: Vector2, b: Vector2) {
    return Vector.dot(a, b);
  }

  public static min(...others: Vector2[]): Vector2 {
    return Vector.min(...others);
  }

  public static max(...others: Vector2[]): Vector2 {
    return Vector.max(...others);
  }
}

/**
 * Let the vector know, that there is a
 * specific factory for creating a 2 dimensional
 * vector
 */
addFactory(2, Vector2);
