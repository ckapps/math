import { Vector } from './vector';

describe('algebra/vector', () => {
  function compare(a: Vector, b: Vector) {
    expect(Vector.equals(a, b)).toBe(true);
  }

  describe('with instance', () => {
    const x = 0;
    const y = 0;
    const args = [x, y];
    let v: Vector;

    beforeEach(() => {
      v = new Vector(...args);
    });

    it('should create', () => {
      expect(v).toBeDefined();
    });

    it('should return components', () => {
      expect(v.components).toEqual(args);
    });

    it('toString returns string', () => {
      expect(typeof v.toString()).toBe('string');
    });
  });

  describe('normalized', () => {
    it('should normalize', () => {
      const v = new Vector(1, 2, 3).normalized;
      expect(v.magnitude).toEqual(1);
    });
  });
});
