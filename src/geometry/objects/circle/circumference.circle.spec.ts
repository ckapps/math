import { circumference } from './circumference.circle';

describe('geometry/objects/circle', () => {
  describe('circumference', () => {
    it('should return circumference', () => {
      const r = 123;
      expect(circumference(r)).toBe(r * 2 * Math.PI);
    });
  });
});
