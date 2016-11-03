import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { IPSResponse } from './core/ps-response';
import { OneAllAPI } from './social-login/oneall';
import { PsHttp } from './core/ps-http.service';

import { User } from './social-login/user';
import { OneAllAPI } from './social-login/oneall';


@Injectable()
export class AppState {
  _state = {};
  _signUpSubscriber;
  _signInSubscriber;

  constructor(private psHtp: PsHttp, private store: Store) {
    OneAllAPI.getInstance().signUpCallback = this.onSignUp;
    OneAllAPI.getInstance().signInCallback = this.onSignIn;
  }

  get(prop?: any) {
    return this._state[prop];
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  set signUpSubscriber(value: Function) {
    this._signUpSubscriber = value;
  }

  set signInSubscriber(value: Function) {
    this._signInSubscriber = value;
  }

  getNotifications = () => this.store.select('notifications');

  showNotification = (data: IPSResponse) => {
    this.set('notificationMessage', data ? data.message : null);
    this.set('notificationType', data ? data.type : null);
  };

  onSignUp = (data): Observable<User> => {
    return this.psHtp.post(data.callback_uri, data.connection)
      .map(this.extractUser)
      .catch(this.handleUserError)
      .subscribe(this.onSignUpSuccess);
  };

  onSignIn = (data): Observable<User> => {
    return this.psHtp.post(data.callback_uri, _.extend(data.connection, {action: 'login'}))
        .map(this.extractUser)
        .catch(this.handleUserError)
        .subscribe(this.onSignInSuccess);
  };

  extractUser = (res: Response) => {
    return res.json();
  };

  handleUserError = (error) => {
    console.log(error);
  };

  onSignUpSuccess = (data) => {
    if (this._signUpSubscriber) {
      this._signUpSubscriber(data);
    }
  };

  onSignInSuccess = (data) => {
    if (this._signInSubscriber) {
      this._signInSubscriber(data);
    }
  };
}
