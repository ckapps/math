/**
 * This is the internal version used for calculating factorial
 * that takes advantage of tail call optimization
 *
 * @param n
 * @param total
 */
function tailFactorial(n: number, total = 1): number {
  if (n === 1 || n === 0) {
    return total;
  }

  return tailFactorial(n - 1, n * total);
}

/**
 * Calculates the factorial for `n`, denoted as `n!`, where
 * `n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1`
 *
 * @param n Positive integer
 */
export function factorial(n: number) {
  return tailFactorial(n);
}
