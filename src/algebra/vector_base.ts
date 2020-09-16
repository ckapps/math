import { Vector } from './vector';

type VectorCtor = new (...components: number[]) => Vector;
const vectorFactoryMap = new Map<number, VectorCtor>();

/**
 * Uses the length of `components` to determine the
 * explicit `n` dimensional vector constructor
 *
 * @param components Components of the vector
 *
 * @returns
 * An instance of an object that extends `Vector`.
 */
export function create<T = Vector>(components: number[]): T {
  const ctor = vectorFactoryMap.get(components.length);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return new (ctor || Vector)(...components);
}

/**
 * Adds a new factory to create an `n`-dimensional vector.
 * @param n Number of dimensions
 * @param ctor Constructor
 */
export function addFactory(n: number, ctor: VectorCtor) {
  vectorFactoryMap.set(n, ctor);
}
