import { Injectable } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { notifications } from './notifications';
import { contact, contactToken, Contact } from './contact';
import { slides } from './slides';
import { AppActions } from './app.actions';
import { PsHttp, IPSResponse } from './core';

@Injectable()
export class AppState {
  constructor(private psHtp: PsHttp, private store: Store) {}

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
    contact: {
      value: new Contact('Andrew', 'Test', 'andriy.kemin@gmail.com'),
      token: 'test2'
    }
  };

  static provideStore = () => {
    return StoreModule.provideStore({
      slides: slides,
      notifications: notifications,
      contact: combineReducers({
        value: contact,
        token: contactToken
      })}, AppState.defaultState);
  }
}
