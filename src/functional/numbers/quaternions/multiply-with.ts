import { OperatorFunction } from '../../types/operator-function';
import { Quaternion, multiply } from '../../../numbers/quaternion';

export function multiplyWith(
  other: Readonly<Quaternion>,
): OperatorFunction<Readonly<Quaternion>, Quaternion> {
  return q => multiply(q, other);
}
