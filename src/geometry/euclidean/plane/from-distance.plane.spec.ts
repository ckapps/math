import { down, up } from '../../../algebra/vector3';
import { fromDistance } from './from-distance.plane';

describe('geometry/euclidean/plane/from-distance', () => {
  it('should be on xz axis', () => {
    const p = fromDistance(up, 0);

    expect(p.normal).toEqual(up);
    expect(p.point.length).toBe(3);
    expect(p.point[0] === 0).toBe(true);
    expect(p.point[1] === 0).toBe(true);
    expect(p.point[2] === 0).toBe(true);
  });

  it('should be offset from xz axis', () => {
    const p = fromDistance(down, 1);

    expect(p.normal).toEqual(down);
    expect(p.point.length).toBe(3);
    expect(p.point[0] === 0).toBe(true);
    expect(p.point[1] === 1).toBe(true);
    expect(p.point[2] === 0).toBe(true);
  });
});
