import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { MODE } from './social-login.service';

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