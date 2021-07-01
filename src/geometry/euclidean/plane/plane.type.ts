import { vectorNr } from '../../../algebra/vector/vector.types';

export interface Plane<T extends vectorNr> {
  /** Any point on the plane */
  point: T;
  /**
   * Some normal that defines how the plane spans based
   * in relation to the given point
   */
  normal: T;
}
