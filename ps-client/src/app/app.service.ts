import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { IPSResponse } from './core/ps-response';
import { OneAllAPI } from './social-login/oneall';
import { PsHttp } from './core/ps-http.service';
import { Observable } from 'rxjs/Observable';
import { User } from "./social-login/user";
import {OneAllAPI} from "./social-login/oneall";

@Injectable()
export class AppState {
  _state = {};
  _signUpSubscriber;

  constructor(private psHtp: PsHttp) {
    OneAllAPI.getInstance().signUpCallback = this.onSignUp;
  }

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }

  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    return this.state[prop];
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  set signUpSubscriber(value: Function) {
    this._signUpSubscriber = value;
  }

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

  _clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
