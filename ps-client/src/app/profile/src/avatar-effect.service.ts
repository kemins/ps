import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { ProfileService } from './profile.service';

@Injectable()
export class AvatarEffectService {
    public constructor(
      private profileService: ProfileService,
      private actions$: Actions) {
    }

    @Effect()
    public save$: Observable<Action> = this.actions$
        .ofType(AppActions.RESET_AVATAR)
        .mergeMap(() => {
            return this.profileService.getDirtyProfile();
        })
        .map(({picture}) => ({type: AppActions.SET_AVATAR, payload: {data: picture}}));
}