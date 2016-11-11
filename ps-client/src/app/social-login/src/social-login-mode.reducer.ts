import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { MODE } from './social-login.service';

export const socialLoginMode = (mode: MODE, action: Action) => {
    let mode: MODE;

    switch (action.type) {
        case AppActions.SL_SET_MODE:
            mode = action.payload;
            break;
        default:
            mode = mode;
            break;
    }

    return mode;
};