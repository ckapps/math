import { scale as _scale } from '../../base';

import { vectorNr } from './vector.types';

/**
 * Scales all components of the vector by the given `scalar`.
 *
 * @param v The vector to scale
 * @param scalar The scalar used for scaling
 *
 * @returns
 * A new vector with each component scaled by `scalar`.
 */
export function scale<T extends vectorNr>(v: T, scalar: number): T;
export function scale(v: vectorNr, scalar: number): vectorNr;

export function scale(v: vectorNr, scalar: number): vectorNr {
  return _scale(v, scalar);
}

/**
 * @param scalar Scalar by which the components of the vector should be scaled
 *
 * @returns
 * Function that is called with a vector and that returns a new vector
 * where each component is scaled by the given `scalar`.
 */
export function scaleBy<T extends vectorNr>(scalar: number): (v: T) => T;
export function scaleBy(scalar: number): (v: vectorNr) => vectorNr;

export function scaleBy(scalar: number) {
  return (v: vectorNr) => scale(v, scalar);
}
