import { Injectable } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { notifications } from './notifications';
import { contact, dirtyContact, contactToken, Contact } from './contact';
import { slides } from './slides';
import { AppActions } from './app.actions';
import { IPSResponse } from './core';
import { socialLoginMode, MODE } from './social-login';
import { footerActions } from './footer-bar';
import { AppStore } from './app.state';
import { profile, dirtyProfile } from './profile';
import { sideBarActions, sideBarCurrentAction } from './side-bar';
import { profileAvatar } from './profile/src/profile-avatar.reducer';
import { dirtyProfileAvatar } from './profile/src/dirty-profile-avatar.reducer';
import { newAlbum } from './albums/src/new-album.reducer';

@Injectable()
export class AppService {
  constructor(private store: Store<AppStore>) {}

  getNotifications() {
    return this.store.select('notifications');
  }

  closeNotification(notification: IPSResponse) {
    this.store.dispatch({
      type: AppActions.READ_NOTIFICATIONS,
      payload: notification
    })
  }

  static defaultState = {
    slides: [],
    notifications: [],
    socialLogin: {
      mode: MODE.NONE
    },
    contact: {
      value: new Contact(),
      dirtyValue: new Contact(),
      token: ''
    },
    profile: {
      value: {},
      dirtyValue: {},
    }
  };

  static provideStore() {
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
