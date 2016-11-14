import { Injectable } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { notifications } from './notifications';
import { contact, dirtyContact, contactToken, Contact } from './contact';
import { slides } from './slides';
import { AppActions } from './app.actions';
import { IPSResponse } from './core';
import { socialLoginMode, MODE } from './social-login';
import { footerActions } from './footer-bar';

@Injectable()
export class AppService {
  constructor(private store: Store) {}

  getNotifications = () => this.store.select('notifications');

  closeNotification = (notification: IPSResponse) => {
    this.store.dispatch({
      type: AppActions.READ_NOTIFICATIONS,
      payload: notification
    })
  };

  showNotification = (notification: IPSResponse) => {
    this.store.dispatch({
      type: AppActions.ADD_NOTIFICATION,
      payload: notification
    })
  };

  static defaultState = {
    slides: [],
    notifications: [],
    socialLogin: {
      mode: MODE.NONE
    },
    contact: {
      value: new Contact('Andrew', 'Test', 'andriy.kemin@gmail.com'),
      dirtyValue: new Contact('Andrew', 'Test', 'andriy.kemin@gmail.com'),
      token: ''
    },
    footerActions: [{
      label: 'Home',
      link: '/home'
    }, {
      label: 'Contact us',
      link: '/contact'
    }]
  };

  static provideStore = () => {
    let appReducer = combineReducers({
      footerActions: footerActions,
      slides: slides,
      notifications: notifications,
      socialLogin: combineReducers({
        mode: socialLoginMode,
      }),
      contact: combineReducers({
        value: contact,
        dirtyValue: dirtyContact,
        token: contactToken
      })});

    return StoreModule.provideStore(AppService.rootReducer(appReducer), AppService.defaultState);
  };

  private static rootReducer = (reducer) => {
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
