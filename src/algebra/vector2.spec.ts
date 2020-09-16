import { Vector2 } from './vector2';
import { create } from './vector_base';

describe('algebra/vector2', () => {
  describe('create', () => {
    it('should create', () => {
      const v = new Vector2(0, 0);
      expect(v).toBeDefined();
    });

    it('should register factory for self', () => {
      const v = create([0, 0]);
      expect(v instanceof Vector2).toBeTruthy();
    });
  });

  describe('components', () => {
    it('should create', () => {
      const x = 0;
      const y = 0;
      const v = new Vector2(x, y);
      expect(v.components).toEqual([x, y]);
    });
  });
});
