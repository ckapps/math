import { exponential } from './exponential';

describe('functional/exponential', () => {
  it('should calculate exponential', () => {
    const base = 4;
    const exp = 4;
    const fn = exponential(base);
    const r = fn(exp);

    expect(r).toBe(Math.pow(base, exp));
  });
});
