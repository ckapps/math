import { Vector } from './vector';

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
    return new Vector3(0, 1, 0);
  }
  /**
   * Vector3(-1, 0, 0).
   */
  public static get left() {
    return new Vector3(0, 1, 0);
  }
  /**
   * Vector3(1, 0, 0).
   */
  public static get right() {
    return new Vector3(0, 1, 0);
  }

  constructor(x: number, y: number, z: number) {
    super([x, y, z]);
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
}
