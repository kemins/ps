import { Action } from '@ngrx/store';
import { IPSResponse } from '../../core';
import { AppActions } from '../../app.actions';


export const notifications = (notifications: Array<IPSResponse>, action: Action) => {
    let result: Array<IPSResponse>;

    switch (action.type) {
        case AppActions.ADD_NOTIFICATION:
            result = [...notifications.concat(action.payload)];
            break;

        case AppActions.READ_NOTIFICATIONS:
            (action.payload as IPSResponse).read = true;
            result = [...notifications];
            break;

        default:
            result = notifications;
            break;
    }

    return result;
};