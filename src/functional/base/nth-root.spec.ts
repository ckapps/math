import { nthRoot } from './nth-root';

describe('functional/nthRoot', () => {
  it('should return nth root', () => {
    const exp = 4;
    const value = 4;
    const fn = nthRoot(exp);
    const r = fn(Math.pow(value, exp));

    expect(r).toBe(value);
  });
});
