import { Action } from '@ngrx/store';
import { BarAction } from './../../footer-bar';
import { AppActions } from '../../app.actions';


export const sideBarActions = (barActions: BarAction[], action: Action) => {
    let result: BarAction[];

    switch (action.type) {
        case AppActions.SET_SIDE_BAR_ACTIONS:
            result = [... action.payload];
            break;
        default:
            result = barActions;
            break;
    }

    return result;
};