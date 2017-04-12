import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import * as _ from 'lodash';
import { BarAction } from '../../footer-bar/src/bar-action.model';


@Injectable()
export class SideBarEffectService {
    constructor(private actions$: Actions) {
    }

    @Effect() setAction$: Observable<Action> = this.actions$
        .ofType(AppActions.SET_CURRENT_ACTION_BY_NAME)
        .switchMap(({payload}): Observable<Array<BarAction>> => payload.actions, (previous, current): BarAction => _.find(current, {name: previous.payload.name}))
        .map((action) => ({
            type: AppActions.SET_CURRENT_ACTION,
            payload: action
        }));
}