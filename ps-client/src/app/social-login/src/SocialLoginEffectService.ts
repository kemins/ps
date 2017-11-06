import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { SocialLoginDataService } from './SocialLoginDataService';
import { MODE } from './SocialLoginService';
import { IAppStore } from '../../IAppState';


@Injectable()
export class SocialLoginEffectService {
  private types = {
    success: AppActions.USER_AUTH_SUCCESS,
    fault: AppActions.USER_AUTH_FAIL
  };

  public constructor(private socialLoginDataService: SocialLoginDataService, private actions$: Actions,
                     private store: Store<IAppStore>) {
  }

  @Effect()
  public signIn$: Observable<Action> = this.actions$
    .ofType(AppActions.SIGN_IN_WITH_TOKE)
    .mergeMap(({payload}) => {
      return this.socialLoginDataService.signIn(payload);
    })
    .map(res => ({type: this.types[res.type], payload: res}));


  @Effect()
  public signUp$: Observable<Action> = this.actions$
    .ofType(AppActions.SIGN_UP_WITH_TOKE)
    .mergeMap(({payload}) => {
      return this.socialLoginDataService.signUp(payload);
    })
    .map(res => ({type: this.types[res.type], payload: res}));

  @Effect()
  public authSuccess$: Observable<Action> = this.actions$
    .ofType(AppActions.USER_AUTH_SUCCESS)
    .do(({payload}) => {
      this.store.dispatch({type: AppActions.SL_SET_MODE, payload: MODE.NONE});
      this.store.dispatch({type: AppActions.SET_PROFILE, payload: payload.body});
      this.store.dispatch({type: AppActions.SET_DIRTY_PROFILE, payload: payload.body});
    })
    .map(() => ({
      type: AppActions.NAVIGATE_TO, payload: {
        state: '/user',
        native: true
      }
    }));

  @Effect()
  public logout$: Observable<Action> = this.actions$
    .ofType(AppActions.LOGOUT_SUCCESS)
    .map(() => ({
      type: AppActions.NAVIGATE_TO, payload: {
        state: '/home'
      }
    }));
}
