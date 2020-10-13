import { chain, expand } from '../flow';
import { divide } from './divide';
import { polynomial } from './polynomial';

/**
 * Creates a function that is represented as the quotient
 * of 2 polynomial functions `P` and `Q` of `x` as in
 * `f(x) = P(x) / Q(x)`.
 *
 * @param pc Coefficients of `P`
 * @param qc Coefficients of `Q`
 */
export function rational(pc: number[], qc: number[]) {
  return chain(divide, expand(polynomial(pc), polynomial(qc)));
}
