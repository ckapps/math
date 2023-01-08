import { describe, expect, it, jest } from '@jest/globals';
import { fromAxisAngle, toAxisAngle } from './axis-angle';

import { scale, vec3 } from '../../algebra/vector3';

jest.mock('../../algebra/vector3', () => {
  const impl: any = jest.requireActual('../../algebra/vector3');
  return {
    ...impl,
    scale: jest.fn().mockImplementation(impl.scale),
  };
});

describe('numbers/quaternion/to-axis-angle', () => {
  const mockQ = {
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  it('toAxisAngle', () => {
    const [axis, angle] = toAxisAngle(mockQ);

    expect(angle).toBe(Math.PI);
    expect(axis).toEqual([0, 0, 0]);
  });

  it('fromAxisAngle', () => {
    const sinSpy = jest.spyOn(Math, 'sin');
    const cosSpy = jest.spyOn(Math, 'cos');

    const angle = Math.PI;
    const v: vec3 = [1, 0, 0];
    const r = fromAxisAngle(v, angle);

    expect(r).toBeDefined();
    expect(cosSpy).toBeCalledWith(angle / 2);
    expect(sinSpy).toBeCalledWith(angle / 2);
    expect(scale).toBeCalledWith(v, expect.anything());
  });
});
