import { chain } from './chain';

describe('functional/chain', () => {
  it('should return value from the outermost function', () => {
    const fn = chain(
      () => 1,
      () => 2,
    );

    expect(fn(546)).toBe(1);
  });

  it('should call chained functions with return values', () => {
    const returnValueForF = 42;
    const returnValueForG = 'test';

    const h = jest.fn();
    const g = jest.fn().mockReturnValue(returnValueForG);
    const f = jest.fn().mockReturnValue(returnValueForF);
    const fn = chain(h, g, f);

    const mockArgument = {};
    fn(mockArgument);

    expect(f).toBeCalledWith(mockArgument);
    expect(g).toBeCalledWith(returnValueForF);
    expect(h).toBeCalledWith(returnValueForG);
  });
});
