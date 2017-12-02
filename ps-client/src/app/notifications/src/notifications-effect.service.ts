import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { AppActions } from '../../AppActions';
import { IPayloadAction } from '../../core/src/IPayloadAction';


@Injectable()
export class NotificationsEffectService implements OnDestroy {
    constructor(private actions$: Actions<IPayloadAction>) {}

    @Effect() addNotification$: Observable<IPayloadAction> = this.actions$
        .filter(action => /(POST_SUCCESS|POST_FAIL)$/.test(action.type))
        .map(({payload}) => ({type: AppActions.ADD_NOTIFICATION, payload}));


    @Effect() autoCloseNotification$: Observable<IPayloadAction> = this.actions$
        .ofType(AppActions.ADD_NOTIFICATION)
        .delay(3000)
        .map(({payload}) => ({type: AppActions.READ_NOTIFICATIONS, payload}));

    ngOnDestroy = () => {};
}