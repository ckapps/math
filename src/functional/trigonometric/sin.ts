import { vec2 } from '../../algebra/vector2';
import { vec3 } from '../../algebra/vector3';

/**
 * @param numbers Numeric expressions to be evaluated
 *
 * @returns
 * The sinus for each supplied numeric expressions
 */
export function sin(numbers: [number]): [number];
export function sin(numbers: vec2): vec2;
export function sin(numbers: vec3): vec3;
export function sin(numbers: number[]): number[] {
  return numbers.map(Math.sin);
}
