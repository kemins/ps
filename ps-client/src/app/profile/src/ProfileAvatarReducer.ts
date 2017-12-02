import { AppActions } from '../../AppActions';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const profileAvatar = (data, action: IPayloadAction) => {
  let result;

  switch (action.type) {
    case AppActions.USER_AUTH_SUCCESS:
      result = {...action.payload.body.picture};
      break;

    case AppActions.SET_AVATAR:
      result = {...action.payload};
      break;

    case AppActions.LOGOUT_SUCCESS:
      result = {};

    default:
      result = data;
      break;
  }

  return result;
};
