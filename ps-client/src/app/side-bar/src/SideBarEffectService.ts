import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import * as _ from 'lodash';
import { IBarAction } from '../../footer-bar/';
import { IPayloadAction } from '../../core/src/IPayloadAction';

@Injectable()
export class SideBarEffectService {
  public constructor(private actions$: Actions<IPayloadAction>) {
  }

  @Effect()
  public setAction$: Observable<IPayloadAction> = this.actions$
    .ofType(AppActions.SET_CURRENT_ACTION_BY_NAME)
    .switchMap(({payload}): Observable<Array<IBarAction>> => payload.actions,
      (previous, current): IBarAction => _.find(current, {name: previous.payload.name}))
    .map((action) => ({
      type: AppActions.SET_CURRENT_ACTION,
      payload: action
    }));
}
