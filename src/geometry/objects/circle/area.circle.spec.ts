import { area } from './area.circle';

describe('geometry/objects/circle', () => {
  describe('area', () => {
    it('should return area', () => {
      const r = 123;
      expect(area(r)).toBe(Math.pow(r, 2) * Math.PI);
    });
  });
});
