import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import * as _ from 'lodash';
import { IBarAction } from '../../footer-bar/';

@Injectable()
export class SideBarEffectService {
  public constructor(private actions$: Actions) {
  }

  @Effect()
  public setAction$: Observable<Action> = this.actions$
    .ofType(AppActions.SET_CURRENT_ACTION_BY_NAME)
    .switchMap(({payload}): Observable<Array<IBarAction>> => payload.actions, (previous, current): IBarAction => _.find(current, {name: previous.payload.name}))
    .map((action) => ({
      type: AppActions.SET_CURRENT_ACTION,
      payload: action
    }));
}
