import { lateralSurfaceArea } from './lateral-surface-area.cylinder';

describe('geometry/objects/cylinder', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(lateralSurfaceArea(r, h)).toBe(2 * Math.PI * r * h);
    });
  });
});
