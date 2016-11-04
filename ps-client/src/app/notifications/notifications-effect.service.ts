import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { AppActions } from '../app.actions';


@Injectable()
export class NotificationsEffectService implements OnDestroy {
    constructor(private actions$: Actions) {}

    @Effect() addNotification$: Observable<Action> = this.actions$
        .filter(action => /(POST_SUCCESS|POST_FAIL)$/.test(action.type))
        .map(({payload}) => ({type: AppActions.ADD_NOTIFICATION, payload}));

    ngOnDestroy = () => {};
}