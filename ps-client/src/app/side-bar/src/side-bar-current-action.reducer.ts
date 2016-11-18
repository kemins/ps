import { Action } from '@ngrx/store';
import { BarAction } from './../../footer-bar';
import { AppActions } from '../../app.actions';


export const sideBarCurrentAction = (barActions: BarAction, action: Action) => {
    let result: BarAction;

    switch (action.type) {
        case AppActions.SET_CURRENT_ACTION:
            result = Object.assign({}, action.payload);
            break;

        default:
            result = barActions;
            break;
    }

    return result;
};