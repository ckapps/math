import { Vector2 } from './vector2';

describe('algebra/vector2', () => {
  it('should create', () => {
    const x = 0;
    const y = 0;
    const v = new Vector2(x, y);
    expect(v.components[0]).toBe(x);
    expect(v.components[1]).toBe(y);
  });
});
