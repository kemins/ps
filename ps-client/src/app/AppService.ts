import { Injectable } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { notifications } from './notifications';
import { contact, dirtyContact, contactToken } from './contact';
import { slides } from './slides';
import { AppActions } from './AppActions';
import { IPSResponse } from './core';
import { socialLoginMode, MODE } from './social-login';
import { footerActions } from './footer-bar';
import { IAppStore } from './IAppState';
import { profile, dirtyProfile, profileAvatar, dirtyProfileAvatar } from './profile';
import { sideBarActions, sideBarCurrentAction } from './side-bar';
import { newAlbum } from './albums';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  public constructor(private store: Store<IAppStore>) {
  }

  public getNotifications(): Observable<IPSResponse[]> {
    return this.store.select<IPSResponse[]>('notifications');
  }

  public closeNotification(notification: IPSResponse): void {
    this.store.dispatch({
      type: AppActions.READ_NOTIFICATIONS,
      payload: notification
    })
  }

  public static defaultState = {
    slides: [],
    notifications: [],
    socialLogin: {
      mode: MODE.NONE
    },
    contact: {
      value: {},
      dirtyValue: {},
      token: ''
    },
    profile: {
      value: {},
      dirtyValue: {},
    },
    albums: {
      newAlbum: {}
    }
  };

  public static provideStore() {
    const appReducer = combineReducers({
      footerActions: footerActions,
      sideBarActions: sideBarActions,
      sideBarCurrentAction: sideBarCurrentAction,
      slides: slides,
      notifications: notifications,
      socialLogin: combineReducers({
        mode: socialLoginMode,
      }),
      contact: combineReducers({
        value: contact,
        dirtyValue: dirtyContact,
        token: contactToken
      }),
      profile: combineReducers({
        value: profile,
        dirtyValue: dirtyProfile,
        avatar: profileAvatar,
        dirtyAvatar: dirtyProfileAvatar
      }),
      albums: combineReducers({
        newAlbum: newAlbum
      })
    });

    return StoreModule.provideStore(AppService.rootReducer(appReducer), AppService.defaultState);
  };

  private static rootReducer(reducer) {
    return (state, action) => {
      let nextState;

      if (action.type === AppActions.HMR_RESTORE) {
        nextState = action.payload;
      } else {
        nextState = reducer(state, action);
      }

      return nextState;
    }
  };
}
