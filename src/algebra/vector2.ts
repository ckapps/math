import { Vector } from './vector';

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
    return new Vector2(0, 1);
  }
  /**
   * Vector2(-1, 0).
   */
  public static get left() {
    return new Vector2(0, 1);
  }
  /**
   * Vector2(1, 0).
   */
  public static get right() {
    return new Vector2(0, 1);
  }

  /**
   * Creates a new two dimensional vector
   *
   * @param x The x component
   * @param y The y component
   */
  constructor(x: number, y: number) {
    super([x, y]);
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

  public static min(...vectors: Vector2[]) {
    const [x, y] = Vector.min(...vectors).components;
    return new Vector2(x, y);
  }

  public static max(...vectors: Vector2[]) {
    const [x, y] = Vector.max(...vectors).components;
    return new Vector2(x, y);
  }

  protected readonly selfFactory = ([x, y]: number[]) => new Vector2(x, y);
}
