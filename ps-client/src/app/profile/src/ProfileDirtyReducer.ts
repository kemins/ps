import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { IProfile } from './IProfile';

export const dirtyProfile = (profile: IProfile, action: Action) => {
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
