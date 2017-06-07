import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { SocialLoginService } from './social-login';
import { IPSResponse, PsHttp } from './core';
import * as normalizeStyles from 'normalize.css/normalize.css';
import * as bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrapThemeStyles from 'bootstrap/dist/css/bootstrap-theme.min.css';
import * as appStyles from './app.styl';
import * as mdStyles from '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { MODE } from './social-login/src/social-login.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Subscription } from 'rxjs';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    normalizeStyles,
    bootstrapStyles,
    bootstrapThemeStyles,
    mdStyles,
    appStyles,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SocialLoginService],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.html'
})
export class App implements OnDestroy {
  name = 'PS';
  url = 'https://photo-state.com';
  notifications: Observable<IPSResponse[]>;
  slMode: Observable<MODE>;
  private nSubscription: Subscription;

  constructor(private appState: AppService, private psHtp: PsHttp, private socialLoginService: SocialLoginService,
              private snackBar: MdSnackBar, private ref: ChangeDetectorRef) {
    this.notifications = appState.getNotifications()
      .map((notifications: IPSResponse[]) => notifications.filter(({read}) => !read));

    this.nSubscription = this.notifications.subscribe((notifications: IPSResponse[]) => {
      notifications.forEach(this.openNotification);
      this.ref.markForCheck();
    });

    this.slMode = socialLoginService.getMode();
  }

  get pendingRequests() {
    return this.psHtp.pendingRequests;
  }

  isSocialLogin(mode: MODE) {
    return mode == MODE.SIGN_UP || mode == MODE.SIGN_IN;
  }

  openNotification = (notification: IPSResponse) => {
    const config = new MdSnackBarConfig();
    config.duration = 3000;

    this.snackBar.open(notification.message, '', config);
  };

  closeSocialLogin() {
    this.socialLoginService.setMode(MODE.NONE);
  }

  ngOnDestroy() {
    this.nSubscription.unsubscribe();
  }
}