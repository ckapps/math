import { volume } from './volume.cone';

describe('geometry/objects/cone', () => {
  describe('volume', () => {
    it('should return volume', () => {
      const r = 123;
      const h = 321;
      expect(volume(r, h)).toBe((Math.PI / 3) * h * Math.pow(r, 2));
    });
  });
});
