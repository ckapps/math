import { multiplyWith } from './multiply-with';

import * as q from '../../../numbers/quaternion';

jest.mock('../../../numbers/quaternion');

describe('numbers/quaternion/multiply-with', () => {
  const mockQuaternion = { w: 0, x: 0, y: 0, z: 0 };

  it('should return a function', () => {
    expect(typeof multiplyWith(mockQuaternion)).toBe('function');
  });

  it('should call multiplyWith', () => {
    const fn = multiplyWith(mockQuaternion);

    fn(mockQuaternion);

    expect(q.multiply).toBeCalledWith(mockQuaternion, mockQuaternion);
  });
});
