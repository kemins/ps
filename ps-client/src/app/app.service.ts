import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { IPSResponse } from './core/ps-response';
import { PsHttp } from './core/ps-http.service';

import { AppActions } from './app.actions';


@Injectable()
export class AppState {
  _state = {};
  _signUpSubscriber;
  _signInSubscriber;

  constructor(private psHtp: PsHttp, private store: Store) {}

  get(prop?: any) {
    return this._state[prop];
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

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
}
