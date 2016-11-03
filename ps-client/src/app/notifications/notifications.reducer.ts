import { Action } from '@ngrx/store';


import { IPSResponse } from '../core/ps-response';
import { AppActions } from '../app.actions';


export const notifications = (notifications: Array<IPSResponse>, action: Action) => {
    let result: Array<IPSResponse>;

    switch (action.type) {
        case AppActions.ADD_NOTIFICATION:
            result = [...notifications.concat(action.payload)];
            break;

        default:
            result = notifications;
            break;
    }

    return result;
};