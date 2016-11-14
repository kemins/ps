import { Action } from '@ngrx/store';
import { BarAction } from './bar-action.model';


export const footerActions = (barActions: BarAction[], action: Action) => {
    let result: BarAction[];

    switch (action.type) {
        default:
            result = barActions;
            break;
    }

    return result;
};