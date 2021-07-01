import { flow } from 'fp-ts/lib/function';
import { dotBy, subtract } from '../../../algebra/vector';
import { vectorNr } from '../../../algebra/vector/vector.types';

import { Plane } from './plane.type';

export enum PlaneSide {
  /** When some point is "on" the plane */
  OnPlane,
  /** When some point is "in front of" the plane */
  Front,
  /** When some point is "behind" the plane */
  Back,
}

/**
 * @param p Plane
 *
 * @returns
 * A function that can be called with a point `v`
 * and that returns the value of the `PlaneSide` enum
 * describing where the point `v` is located in
 * relation to the given plane `p`
 */
export function onSideOfPlane<T extends vectorNr>(p: Plane<T>) {
  return (v: T) => _planeOnSide(p, v);
}

function _planeOnSide<T extends vectorNr>(p: Plane<T>, v: T) {
  const c = flow(subtract, dotBy<T>(p.normal))(v, p.point);

  if (c === 0) {
    return PlaneSide.OnPlane;
  } else if (c > 0) {
    return PlaneSide.Front;
  }
  return PlaneSide.Back;
}
