import { divide } from './divide';

import * as base from '../../base/divide';

describe('functional/divide', () => {
  const divideSpy = jest.spyOn(base, 'divide');

  it('should call divide', () => {
    const [min, max, value] = [10, 20, 0.5];
    divide([min, max, value]);

    expect(divideSpy).toBeCalledWith(min, max, value);
  });
});
