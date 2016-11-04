/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AppState } from './app.service';
import { PsHttp } from "./core/ps-http.service";


import { MODE } from './social-login/index.ts';
import { SocialLoginService } from './social-login/index.ts';

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
  providers: [SocialLoginService],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class App {
  name = 'PS';
  url = 'https://photo-state.com';
  notifications: Observable<Array<IPSResponse>> = [];

  constructor(private appState: AppState, private psHtp: PsHttp, private socialLoginService: SocialLoginService) {
    this.notifications = appState.getNotifications()
      .map((notifications) => notifications.filter(({read}) => !read));
  }

  get pendingRequests() {
    return this.psHtp.pendingRequests;
  }

  get socialLogin() {
    return this.socialLoginService.mode == MODE.SIGN_UP ||
        this.socialLoginService.mode == MODE.SIGN_IN;
  }

  closeNotification = (alert, notification) => {
    alert.closed = false;
    this.appState.closeNotification(notification);
  };

  openSignUp = () => {
    this.socialLoginService.mode = MODE.SIGN_UP;
  };

  openSignIn = () => {
    this.socialLoginService.mode = MODE.SIGN_IN;
  };

  closeSocialLogin = () => this.socialLoginService.mode = MODE.NONE;
}