import { diameter } from './diameter.circle';

describe('geometry/objects/circle', () => {
  describe('diameter', () => {
    it('should return diameter', () => {
      const r = 123;
      expect(diameter(r)).toBe(r * 2);
    });
  });
});
