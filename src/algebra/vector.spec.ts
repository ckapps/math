import { Vector } from './vector';

describe('algebra/vector', () => {
  function compare(a: Vector, b: Vector) {
    expect(Vector.equals(a, b)).toBe(true);
  }

  it('should create', () => {
    const x = 0;
    const y = 0;
    const v = new Vector(x, y);
    expect(v.components[0]).toBe(x);
    expect(v.components[1]).toBe(y);
  });

  describe('normalized', () => {
    it('should normalize', () => {
      const v = new Vector(1, 2, 3).normalized;
      expect(v.magnitude).toEqual(1);
    });
  });
});
