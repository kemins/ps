import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { ProfileDataService } from './profile-data.service';

@Injectable()
export class ProfileEffectService {
    types = {
        success: AppActions.PROFILE_POST_SUCCESS,
        fault: AppActions.PROFILE_POST_FAIL
    };

    constructor(private profileDataService: ProfileDataService, private actions$: Actions) {
    }

    @Effect() save$: Observable<Action> = this.actions$
        .ofType(AppActions.SAVE_PROFILE)
        .mergeMap(({payload}) => {
            return this.profileDataService.save(payload);
        })
        .map(res => ({type: this.types[res.type], payload: res}));
}