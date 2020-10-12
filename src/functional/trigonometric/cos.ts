import { vec2 } from '../../algebra/vector2';
import { vec3 } from '../../algebra/vector3';

/**
 * @param numbers Numeric expressions to be evaluated
 *
 * @returns
 * The cosinus for each supplied numeric expressions
 */
export function cos(numbers: [number]): [number];
export function cos(numbers: vec2): vec2;
export function cos(numbers: vec3): vec3;
export function cos(numbers: number[]): number[] {
  return numbers.map(Math.cos);
}
