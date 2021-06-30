import { dot, dotBy } from './dot';

describe('algebra/vector/dot', () => {
  it('should return dot', () => {
    const r = dot([0, 0, 0], [1, 1, 1]);
    expect(r).toBe(0);
  });

  describe('dotBy', () => {
    const f = dotBy([1, 1, 1]);
    it('should return dot product', () => {
      const r = f([0, 0, 0]);
      expect(r).toBe(0);
    });
  });
});
