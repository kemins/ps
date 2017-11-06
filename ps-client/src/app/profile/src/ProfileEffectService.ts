import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { ProfileDataService } from './ProfileDataService';
import { ProfileService } from './ProfileService';

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

  public constructor(private profileDataService: ProfileDataService,
              private profileService: ProfileService,
              private actions$: Actions) {
  }

  @Effect()
  public save$: Observable<Action> = this.actions$
    .ofType(AppActions.SAVE_PROFILE)
    .withLatestFrom(this.profileService.getDirtyProfile())
    .switchMap(([action, profile]) => this.profileDataService.save(profile))
    .map(res => ({type: this.saveTypes[res.type], payload: res}));

  @Effect()
  public saveSuccess$: Observable<Action> = this.actions$
    .ofType(AppActions.PROFILE_POST_SUCCESS)
    .map(({payload}) => ({type: AppActions.SET_PROFILE, payload: payload.body}));

  @Effect()
  public logout$: Observable<Action> = this.actions$
    .ofType(AppActions.LOGOUT)
    .mergeMap(() => this.profileDataService.logout())
    .map(res => ({type: this.logoutTypes[res.type], payload: res}));
}