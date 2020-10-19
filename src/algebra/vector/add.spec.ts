import { add } from './add';

describe('algebra/vector/add', () => {
  it('should add', () => {
    const components = [1, 2, 3];
    const v1 = [...components];
    const v2 = [...components];

    const result = add(v1, v2);

    expect(result).toEqual(components.map(c => c * 2));
  });
});
