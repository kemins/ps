import { Injectable } from '@angular/core';
import { ActionReducerMap, combineReducers, Store } from '@ngrx/store';
import { notifications } from './notifications';
import { contact, contactToken, dirtyContact } from './contact';
import { slides } from './slides';
import { IPSResponse } from './core';
import { MODE, socialLoginMode } from './social-login';
import { footerActions } from './footer-bar';
import { IAppStore } from './IAppState';
import { dirtyProfile, dirtyProfileAvatar, profile, profileAvatar } from './profile';
import { sideBarActions, sideBarCurrentAction } from './side-bar';
import { newAlbum, userAlbums } from './albums';
import { Observable } from 'rxjs/Observable';
import { IPayloadAction } from './core/src/IPayloadAction';

@Injectable()
export class AppService {
  public constructor(private store: Store<IAppStore>) {
  }

  public getNotifications(): Observable<IPSResponse[]> {
    return this.store.select('notifications');
  }

  public static appReducer: ActionReducerMap<IAppStore, IPayloadAction> = {
    footerActions: footerActions,
    sideBarActions: sideBarActions,
    sideBarCurrentAction: sideBarCurrentAction,
    slides: slides,
    notifications: notifications,
    socialLogin: combineReducers<any, IPayloadAction>({
      mode: socialLoginMode,
    }),
    contact: combineReducers<any, IPayloadAction>({
      value: contact,
      dirtyValue: dirtyContact,
      token: contactToken
    }),
    profile: combineReducers<any, IPayloadAction>({
      value: profile,
      dirtyValue: dirtyProfile,
      avatar: profileAvatar,
      dirtyAvatar: dirtyProfileAvatar
    }),
    albums: combineReducers<any, IPayloadAction>({
      newAlbum: newAlbum,
      userAlbums: userAlbums
    })
  };

  public static defaultState = {
    slides: [],
    notifications: [],
    socialLogin: {
      mode: MODE.NONE
    },
    contact: {
      value: {
        name: '',
        message: '',
        email: ''
      },
      dirtyValue: {
        name: '',
        message: '',
        email: ''
      },
      token: ''
    },
    profile: {
      value: {},
      dirtyValue: {},
    },
    albums: {
      newAlbum: {
        name: ''
      },
      userAlbums: []
    }
  };

  /*private static rootReducer(reducer) {
    return (state, action) => {
      let nextState;

      if (action.type === AppActions.HMR_RESTORE) {
        nextState = action.payload;
      } else {
        nextState = reducer(state, action);
      }

      return nextState;
    }
  };*/
}
