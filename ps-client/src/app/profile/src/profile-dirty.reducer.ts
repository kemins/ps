import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { Profile } from './profile.model';


export const dirtyCProfile = (profile: Profile, action: Action) => {
    let result: Profile;

    switch (action.type) {
        case AppActions.USER_AUTH_SUCCESS:
            result = Object.assign({}, action.payload.body);
            break;

        case AppActions.SET_DIRTY_PROFILE:
            result = Object.assign({}, action.payload);
            break;

        case AppActions.PROFILE_POST_SUCCESS:
            result = Object.assign({}, action.payload.body);
            break;

        default:
            result = profile;
            break;
    }

    return result;
};