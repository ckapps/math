import { subtract } from './subtract';

describe('algebra/vector/subtract', () => {
  it('should subtract', () => {
    const components = [1, 2, 3];
    const v1 = [...components];
    const v2 = [...components];

    const result = subtract(v1, v2);

    expect(result).toEqual(components.map(() => 0));
  });
});
