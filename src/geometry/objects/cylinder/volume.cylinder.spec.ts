import { volume } from './volume.cylinder';

describe('geometry/objects/cylinder', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(volume(r, h)).toBe(Math.PI * h * Math.pow(r, 2));
    });
  });
});
