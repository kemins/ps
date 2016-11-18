import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import * as _ from 'lodash';


@Injectable()
export class SideBarEffectService {
    constructor(private actions$: Actions) {
    }

    @Effect() setAction$: Observable<Action> = this.actions$
        .ofType(AppActions.SET_CURRENT_ACTION_BY_NAME)
        .mergeMap(({payload}) => payload.actions, (previous, current) => _.find(current, {name: previous.payload.name}))
        .map((action) => ({
            type: AppActions.SET_CURRENT_ACTION,
            payload: action
        }));
}