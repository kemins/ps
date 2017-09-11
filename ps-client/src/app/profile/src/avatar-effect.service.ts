import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { ProfileService } from './profile.service';
import { ProfileDataService } from './profile-data.service';
import { IPSResponse } from '../../core/src/ps-response';

@Injectable()
export class AvatarEffectService {
  private types = {
    success: AppActions.AVATAR_POST_SUCCESS,
    fault: AppActions.AVATAR_POST_FAIL
  };

  public constructor(private profileService: ProfileService,
                     private profileDataService: ProfileDataService,
                     private actions$: Actions) {
  }

  @Effect()
  public save$: Observable<Action> = this.actions$
    .ofType(AppActions.RESET_AVATAR)
    .withLatestFrom(this.profileService.getDirtyProfile())
    .map(([action, {picture}]) => ({type: AppActions.SET_AVATAR, payload: picture}));

  @Effect()
  public uploadAvatar$: Observable<Action> = this.actions$
    .ofType(AppActions.UPLOAD_AVATAR)
    .withLatestFrom(this.profileService.getAvatar())
    .switchMap(([action, avatar]) => this.profileDataService.uploadAvatar(avatar.m))
    .map((res: IPSResponse) => ({
      type: this.types[res.type],
      payload: {message: res.message}
    }));

  @Effect()
  public uploadAvatarSuccess$: Observable<Action> = this.actions$
    .ofType(AppActions.AVATAR_POST_SUCCESS)
    .map((res: IPSResponse) => ({
      type: AppActions.RESET_AVATAR
    }));
}