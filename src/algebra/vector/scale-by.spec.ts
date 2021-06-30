import { scaleBy } from './scale-by';

describe('vector/scale-by', () => {
  it('should scale by 0', () => {
    const scaleByZero = scaleBy(0);

    const result = scaleByZero([1, 2, 3]);
    expect(result).toEqual([0, 0, 0]);
  });

  it('should scale by 1', () => {
    const scaleByZero = scaleBy(1);

    const result = scaleByZero([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should scale by 2', () => {
    const scaleByZero = scaleBy(2);

    const result = scaleByZero([1, 2, 3]);
    expect(result).toEqual([2, 4, 6]);
  });
});
