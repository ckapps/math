import { dot } from './dot';

describe('algebra/vector/dot', () => {
  it('should return dot', () => {
    const r = dot([0, 0, 0], [1, 1, 1]);
    expect(r).toBe(0);
  });
});
