import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { Router } from '@angular/router';

@Injectable()
export class AppEffectService {
  constructor(private actions$: Actions, private router: Router) {
  }

  @Effect()
  public navigate$: Observable<Action> = this.actions$
    .ofType(AppActions.NAVIGATE_TO)
    .do(({payload}) => payload.native ? window.location.hash = payload.state : this.router.navigate([payload.state]))
    .map(() => ({type: AppActions.POST_NAVIGATE_TO, payload: {}}));
}
