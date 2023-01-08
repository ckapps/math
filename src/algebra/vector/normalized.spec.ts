import { describe, expect, it } from '@jest/globals';
import { normalized } from './normalized';

import { magnitude } from './magnitude';

describe('algebra/vector/normalized', () => {
  it('should normalize', () => {
    const v = normalized([1, 2, 3]);
    expect(magnitude(v)).toEqual(1);
  });
});
