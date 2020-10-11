import * as mat3 from './mat3x3';

describe('algebra/mat3x3', () => {
  function compare(x: {
    expected: readonly number[];
    result: Readonly<mat3.mat3x3>;
  }) {
    const { expected, result } = x;

    expect(result.length).toBe(9);

    for (let i = 0; i < result.length; ++i) {
      if (expected[i]) {
        expect(result[i]).toBe(expected[i]);
      }
    }
  }
  describe('defined matrices', () => {
    const cases: [Readonly<mat3.mat3x3>][] = [[mat3.zero], [mat3.identity]];

    test.each(cases)('should return %p', m => {
      expect(m).toBeDefined();
      expect(m.length).toBe(9);
    });
  });

  describe('translation', () => {
    it('should return translation matrix', () => {
      const [x, y] = [10, -10];
      const result = mat3.translation([x, y]);

      const expected = [];
      expected[6] = x;
      expected[7] = y;

      compare({ expected, result });
    });
  });

  describe('rotation', () => {
    it('should return rotation matrix', () => {
      const radians = Math.PI;
      const result = mat3.rotation(radians);

      const expected = [];
      expected[0] = Math.cos(radians);
      expected[4] = Math.cos(radians);

      expected[1] = -Math.sin(radians);
      expected[3] = Math.sin(radians);

      compare({ expected, result });
    });
  });

  describe('scaling', () => {
    it('should return scaling matrix', () => {
      const [x, y] = [10, -10];
      const result = mat3.scaling([x, y]);

      const expected = [];
      expected[0] = x;
      expected[4] = y;

      compare({ expected, result });
    });
  });

  describe('multiply', () => {
    it('should multiply', () => {
      const result = mat3.multiply(mat3.identity, mat3.identity);

      compare({ expected: mat3.identity, result });
    });
  });
});
