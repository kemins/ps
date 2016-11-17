import { Action } from '@ngrx/store';
import { BarAction } from './bar-action.model';
import { AppActions } from '../../app.actions';


export const footerActions = (barActions: BarAction[], action: Action) => {
    let result: BarAction[];

    switch (action.type) {
        case AppActions.SET_FOOTER_ACTIONS:
            result = [... action.payload];
            break;
        default:
            result = barActions;
            break;
    }

    return result;
};