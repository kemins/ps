import { AppActions } from '../../AppActions';
import { IPayloadAction } from '../../core/src/IPayloadAction';
import { MODE } from './SocialLoginService';

export const socialLoginMode = (mode: MODE, action: IPayloadAction) => {
  let result: MODE;

  switch (action.type) {
    case AppActions.SL_SET_MODE:
      result = action.payload;
      break;
    default:
      result = mode;
      break;
  }

  return result;
};