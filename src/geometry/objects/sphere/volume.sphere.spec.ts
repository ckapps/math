import { volume } from './volume.sphere';

describe('geometry/objects/sphere', () => {
  describe('volume', () => {
    it('should return volume', () => {
      const r = 123;
      expect(volume(r)).toBe((4 / 3) * Math.PI * Math.pow(r, 3));
    });
  });
});
