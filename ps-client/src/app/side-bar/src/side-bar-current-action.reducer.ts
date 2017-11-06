import { Action } from '@ngrx/store';
import { IBarAction } from './../../footer-bar';
import { AppActions } from '../../app.actions';


export const sideBarCurrentAction = (barActions: IBarAction, action: Action) => {
    let result: IBarAction;

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