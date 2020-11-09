import { surfaceArea } from './surface-area.cylinder';

describe('geometry/objects/cylinder', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(surfaceArea(r, h)).toBe(2 * Math.PI * r * (r + h));
    });
  });
});
