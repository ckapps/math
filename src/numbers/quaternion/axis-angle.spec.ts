import { fromAxisAngle, toAxisAngle } from './axis-angle';

import * as v3 from '../../algebra/vector3';

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
    const vec3ScaleSpy = jest.spyOn(v3, 'scale');

    const angle = Math.PI;
    const v: v3.vec3 = [1, 0, 0];
    const r = fromAxisAngle(v, angle);

    expect(r).toBeDefined();
    expect(cosSpy).toBeCalledWith(angle / 2);
    expect(sinSpy).toBeCalledWith(angle / 2);
    expect(vec3ScaleSpy).toBeCalledWith(v, expect.anything());
  });
});
