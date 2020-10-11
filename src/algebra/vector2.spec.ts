import * as vector2 from './vector2';

describe('algebra/vector2', () => {
  it('should expose vector functions', () => {
    //
    expect(typeof vector2.magnitude).toBe('function');
    expect(typeof vector2.sqrtMagnitude).toBe('function');
    expect(typeof vector2.normalized).toBe('function');
    //
    expect(typeof vector2.scale).toBe('function');
    expect(typeof vector2.divide).toBe('function');
    //
    expect(typeof vector2.dot).toBe('function');
    expect(typeof vector2.distance).toBe('function');
    expect(typeof vector2.equals).toBe('function');
    //
    expect(typeof vector2.min).toBe('function');
    expect(typeof vector2.max).toBe('function');
    expect(typeof vector2.add).toBe('function');
    expect(typeof vector2.subtract).toBe('function');
  });

  describe('defined vectors', () => {
    const cases: [[number, number], Readonly<vector2.vec2>][] = [
      [[0, 0], vector2.zero],
      [[1, 1], vector2.one],
      [[0, 1], vector2.up],
      [[0, -1], vector2.down],
      [[-1, 0], vector2.left],
      [[1, 0], vector2.right],
    ];

    test.each(cases)('should return %p', (components, v) => {
      expect(v).toEqual(components);
    });
  });
});
