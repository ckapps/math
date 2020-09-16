import { Vector2 } from './vector';

describe('algebra/vector', () => {
  describe('vector2', () => {
    it('should create', () => {
      const x = 0;
      const y = 0;
      const v = new Vector2(x, y);
      expect(v.x).toBe(x);
      expect(v.y).toBe(y);
    });
  });
});
