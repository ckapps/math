import { OperatorFunction } from '../../types/operator-function';
import { Quaternion, multiply } from '../../../numbers/quaternion';

/**
 * @param other The other quaternion
 *
 * @returns
 * A function that takes a quaternion as an argument.
 * When called with an quaternion `q`, the function
 * will multiply `q` with `other`, returning a new
 * quaternion.
 */
export function multiplyWith(
  other: Readonly<Quaternion>,
): OperatorFunction<Readonly<Quaternion>, Quaternion> {
  return q => multiply(q, other);
}
