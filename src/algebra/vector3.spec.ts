import * as vector3 from './vector3';

describe('algebra/vector3', () => {
  it('should expose vector functions', () => {
    //
    expect(typeof vector3.magnitude).toBe('function');
    expect(typeof vector3.sqrtMagnitude).toBe('function');
    expect(typeof vector3.invert).toBe('function');
    expect(typeof vector3.normalized).toBe('function');
    //
    expect(typeof vector3.scale).toBe('function');
    expect(typeof vector3.scaleBy).toBe('function');
    expect(typeof vector3.divide).toBe('function');
    //
    expect(typeof vector3.dot).toBe('function');
    expect(typeof vector3.distance).toBe('function');
    expect(typeof vector3.equals).toBe('function');
    //
    expect(typeof vector3.min).toBe('function');
    expect(typeof vector3.max).toBe('function');
    expect(typeof vector3.add).toBe('function');
    expect(typeof vector3.subtract).toBe('function');
  });

  describe('cross', () => {
    function compare(a: Readonly<vector3.vec3>, b: Readonly<vector3.vec3>) {
      expect(vector3.equals(a, b)).toBe(true);
    }

    // For basis vectors
    test.each([
      [vector3.right, vector3.up, vector3.forward],
      [vector3.down, vector3.right, vector3.forward],
      [vector3.up, vector3.forward, vector3.right],
      [vector3.backward, vector3.up, vector3.right],
      [vector3.forward, vector3.right, vector3.up],
      [vector3.left, vector3.forward, vector3.up],
    ])(
      '%s x %s = %s',
      (a: Readonly<vector3.vec3>, b: Readonly<vector3.vec3>, expected) => {
        const result = vector3.cross(a, b);
        compare(result, expected);
      },
    );
  });

  describe('defined vectors', () => {
    const cases: [[number, number, number], Readonly<vector3.vec3>][] = [
      [[0, 0, 0], vector3.zero],
      [[1, 1, 1], vector3.one],
      [[0, 1, 0], vector3.up],
      [[0, -1, 0], vector3.down],
      [[-1, 0, 0], vector3.left],
      [[1, 0, 0], vector3.right],
      [[0, 0, 1], vector3.forward],
      [[0, 0, -1], vector3.backward],
    ];

    test.each(cases)('should return %p', (components, v) => {
      expect(v).toEqual(components);
    });
  });
});
