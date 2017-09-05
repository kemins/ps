import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { ProfileDataService } from './profile-data.service';

@Injectable()
export class ProfileEffectService {
  private saveTypes = {
    success: AppActions.PROFILE_POST_SUCCESS,
    fault: AppActions.PROFILE_POST_FAIL
  };

  private logoutTypes = {
    success: AppActions.LOGOUT_SUCCESS,
    fault: AppActions.LOGOUT_FAIL
  };

  constructor(private profileDataService: ProfileDataService, private actions$: Actions) {
  }

  @Effect() save$: Observable<Action> = this.actions$
    .ofType(AppActions.SAVE_PROFILE)
    .mergeMap(({payload}) => {
      return this.profileDataService.save(payload);
    })
    .map(res => ({type: this.saveTypes[res.type], payload: res}));

  @Effect() logout$: Observable<Action> = this.actions$
    .ofType(AppActions.LOGOUT)
    .mergeMap(() => this.profileDataService.logout())
    .map(res => ({type: this.logoutTypes[res.type], payload: res}));
}