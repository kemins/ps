import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { MODE, SocialLoginService } from './social-login';
import { IPSResponse, PsHttp } from './core';

import * as normalizeStyles from 'normalize.css/normalize.css';
import * as bootstrapStyles from 'bootstrap/dist/css/bootstrap.css';
import * as appStyles from './app.styl';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    normalizeStyles,
    bootstrapStyles,
    appStyles,
  ],
  providers: [SocialLoginService],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.html'
})
export class App {
  name = 'PS';
  url = 'https://photo-state.com';
  notifications: Observable<Array<IPSResponse>>;
  slMode: Observable<MODE>;

  constructor(private appState: AppService, private psHtp: PsHttp, private socialLoginService: SocialLoginService) {
    this.notifications = appState.getNotifications()
      .map((notifications) => notifications.filter(({read}) => !read));

    this.slMode = socialLoginService.getMode();
  }

  get pendingRequests() {
    return this.psHtp.pendingRequests;
  }

  isSocialLogin(mode: MODE) {
    return mode == MODE.SIGN_UP || mode == MODE.SIGN_IN;
  }

  closeNotification = (alert, notification) => {
    alert.closed = false;
    this.appState.closeNotification(notification);
  };

  openSignUp = () => {
    this.socialLoginService.setMode(MODE.SIGN_UP);
  };

  openSignIn = () => {
    this.socialLoginService.setMode(MODE.SIGN_IN);
  };

  closeSocialLogin = () => this.socialLoginService.setMode(MODE.NONE);
}