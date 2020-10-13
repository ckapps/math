import { multiplyWith } from './multiply-with';

import * as q from '../../../numbers/quaternion';

describe('functional/scaleBy', () => {
  const mockQuaternion = { w: 0, x: 0, y: 0, z: 0 };
  const multiplySpy = jest.spyOn(q, 'multiply');

  it('should return a function', () => {
    expect(typeof multiplyWith(mockQuaternion)).toBe('function');
  });

  it('should call multiplyWith', () => {
    const fn = multiplyWith(mockQuaternion);

    fn(mockQuaternion);

    expect(multiplySpy).toBeCalledWith(mockQuaternion, mockQuaternion);
  });
});
