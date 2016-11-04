/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AppState } from './app.service';
import { PsHttp } from "./core/ps-http.service";

import * as _ from 'lodash';

import { OneAllAPI } from "./social-login/oneall";
import { MODE } from "./social-login/oneall";
import { IPSResponse } from './core/ps-response';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    require('normalize.css'),
    require('./app.styl'),
    require('bootstrap/dist/css/bootstrap.css')
  ],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class App {
  name = 'PS';
  url = 'https://photo-state.com';
  notifications: Observable<Array<IPSResponse>> = [];

  constructor(private appState: AppState, private psHtp: PsHttp) {
    appState.signUpSubscriber = this.onSignUp;
    appState.signInSubscriber = this.onSignUp;

    this.notifications = appState.getNotifications()
      .map((notifications) => notifications.filter(({read}) => !read));
  }

  ngOnInit() {}

  get pendingRequests() {
    return this.psHtp.pendingRequests;
  }

  get socialLogin() {
    return this.appState.get('socialLogin');
  }

  closeNotification = (alert, notification) => {
    alert.closed = false;
    this.appState.closeNotification(notification);
  };

  openSignUp = () => {
    OneAllAPI.getInstance().mode = MODE.SIGN_UP;
    this.appState.set('socialLogin', true);
  };

  openSignIn = () => {
    OneAllAPI.getInstance().mode = MODE.SIGN_IN;
    this.appState.set('socialLogin', true);
  };

  closeSocialLogin = () => this.appState.set('socialLogin', false);

  onSignUp = (data) => {
    //this.appState.showNotification(data);
    this.closeSocialLogin();
  }
}