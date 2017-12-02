import { AppActions } from '../../AppActions';
import { IProfile } from './IProfile';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const profile = (profile: IProfile, action: IPayloadAction) => {
  let result: IProfile;

  switch (action.type) {
    case AppActions.SET_PROFILE:
      result = {...action.payload};
      break;

    case AppActions.PROFILE_POST_SUCCESS:
      result = {...action.payload.body};
      break;

    case AppActions.LOGOUT_SUCCESS:
      result = {};
      break;

    default:
      result = profile;
      break;
  }

  return result;
};