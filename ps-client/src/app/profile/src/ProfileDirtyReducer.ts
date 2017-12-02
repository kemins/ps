import { AppActions } from '../../AppActions';
import { IProfile } from './IProfile';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const dirtyProfile = (profile: IProfile, action: IPayloadAction) => {
  let result: IProfile;

  switch (action.type) {
    case AppActions.SET_DIRTY_PROFILE:
      result = {...action.payload};
      break;

    case AppActions.LOGOUT_SUCCESS:
      result = {};

    default:
      result = profile;
      break;
  }

  return result;
}
