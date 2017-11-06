import { Action } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { MODE } from './SocialLoginService';

export const socialLoginMode = (mode: MODE, action: Action) => {
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