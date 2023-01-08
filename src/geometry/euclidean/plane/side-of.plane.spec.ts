import { describe, expect, test } from '@jest/globals';
import { down, up, vec3, zero } from '../../../algebra/vector3';
import { Plane } from './plane.type';
import { onSideOfPlane, PlaneSide } from './side-of.plane';

describe('geometry/euclidean/plane/side-of-plane', () => {
  const plane: Plane<Readonly<vec3>> = {
    normal: up,
    point: zero,
  };

  const f = onSideOfPlane(plane);

  test.each([
    [zero, PlaneSide.OnPlane],
    [up, PlaneSide.Front],
    [down, PlaneSide.Back],
  ])('for point %p should return %p', (other, expected) => {
    const result = f(other);
    expect(result).toBe(expected);
  });
});
