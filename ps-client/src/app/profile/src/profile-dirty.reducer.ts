import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { Profile } from './profile.model';


export const dirtyProfile = (profile: Profile, action: Action) => {
  let result: Profile;

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
};