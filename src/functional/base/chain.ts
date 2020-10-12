/**
 * Follows the mathematical notation of
 * `(g ∘ f)(x) = g(f(x))`
 *
 * @param g The outermost function
 * @param f The innermost function
 *
 * @returns
 * A new function with the given functions chained
 */
export function chain<F, G, R>(
  g: (arg: G) => R,
  f: (arg: F) => G,
): (arg: F) => R;

/**
 * Follows the mathematical notation of
 * `(h ∘ g ∘ f)(x) = h(g(f(x)))`
 *
 * @param h The outermost function
 * @param g Bypassing function
 * @param f The innermost function
 *
 * @returns
 * A new function with the given functions chained
 */
export function chain<F, G, H, R>(
  h: (arg: H) => R,
  g: (arg: G) => H,
  f: (arg: F) => G,
): (arg: F) => R;

export function chain<F, G, H, I, R>(
  i: (arg: I) => R,
  h: (arg: H) => I,
  g: (arg: G) => H,
  f: (arg: F) => G,
): (arg: F) => R;

/**
 * Follows the mathematical notation of
 * `(g ∘ f)(x) = g(f(x))`.
 *
 * This means, that the first function passed,
 * will be the last function that is called.
 *
 * @param fns The functions to chain
 *
 * @returns
 * A new function that can be called with the argument of the
 * last function
 */
export function chain(...fns: ((arg: unknown) => unknown)[]) {
  return (arg: unknown) => fns.reduceRight((acc, cur) => cur(acc), arg);
}
