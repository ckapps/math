import { linear } from './linear';

describe('functional/linear', () => {
  it('should return a function', () => {
    expect(typeof linear(0, 0)).toBe('function');
  });

  it('should return the correct value', () => {
    const fn = linear(1, 0);

    const r = fn(10);

    expect(r).toBe(10);
  });
});
