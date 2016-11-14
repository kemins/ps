import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { SocialLoginDataService } from './social-login-data.service';


@Injectable()
export class SocialLoginEffectService extends Type {
    types = {
        success: AppActions.USER_AUTH_SUCCESS,
        fault: AppActions.USER_AUTH_FAIL
    };

    constructor(private socialLoginDataService: SocialLoginDataService, private actions$: Actions) {}

    @Effect() signIn$: Observable<Action> = this.actions$
        .ofType(AppActions.SIGN_IN_WITH_TOKE)
        .mergeMap(({payload}) => {
            return this.socialLoginDataService.signIn(payload);
        })
        .map(res => ({type: this.types[res.type], payload: res}));


    @Effect() signUp$: Observable<Action> = this.actions$
        .ofType(AppActions.SIGN_UP_WITH_TOKE)
        .mergeMap(({payload}) => this.socialLoginDataService.signUp(payload))
        .map(res => ({type: this.types[res.type], payload: res}));
}