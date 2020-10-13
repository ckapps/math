import { divide } from './divide';

describe('base/divide', () => {
  it('should divide', () => {
    const r = [10000, 10, 10, 10, 10];

    const result = divide(...r);
    expect(result).toBe(1);
  });
});
