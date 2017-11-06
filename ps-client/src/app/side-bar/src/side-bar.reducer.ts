import { Action } from '@ngrx/store';
import { IBarAction } from './../../footer-bar';
import { AppActions } from '../../app.actions';


export const sideBarActions = (barActions: IBarAction[], action: Action) => {
    let result: IBarAction[];

    switch (action.type) {
        case AppActions.SET_SIDE_BarActionS:
            result = [... action.payload];
            break;

        default:
            result = barActions;
            break;
    }

    return result;
};