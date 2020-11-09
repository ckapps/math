import { surfaceArea } from './surface-area.sphere';

describe('geometry/objects/sphere', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      expect(surfaceArea(r)).toBe(4 * Math.PI * Math.pow(r, 2));
    });
  });
});
