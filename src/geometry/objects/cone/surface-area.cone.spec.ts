import { surfaceArea } from './surface-area.cone';

describe('geometry/objects/sphere', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(surfaceArea(r, h)).toBe(
        Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)),
      );
    });
  });
});
