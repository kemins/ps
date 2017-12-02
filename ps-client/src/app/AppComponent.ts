import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './AppService';
import { SocialLoginService } from './social-login';
import { HttpService, IPSResponse } from './core';
import * as normalizeStyles from 'normalize.css/normalize.css';
import * as bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrapThemeStyles from 'bootstrap/dist/css/bootstrap-theme.min.css';
import * as appStyles from './app.styl';
import * as mdStyles from '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { MODE } from './social-login/src/SocialLoginService';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
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

  public constructor(private appState: AppService, private psHtp: HttpService,
                     private socialLoginService: SocialLoginService,
                     private snackBar: MatSnackBar, private ref: ChangeDetectorRef) {
    this.notifications = appState.getNotifications()
      .map((notifications: IPSResponse[]) => notifications.filter(({read}) => !read));

    this.nSubscription = this.notifications.subscribe((notifications: IPSResponse[]) => {
      notifications.forEach(this.openNotification);
      this.ref.markForCheck();
    });

    this.slMode = socialLoginService.getMode();
  }

  public get pendingRequests() {
    return this.psHtp.pendingRequests;
  }

  public isSocialLogin(mode: MODE): boolean {
    return mode == MODE.SIGN_UP || mode == MODE.SIGN_IN;
  }

  public openNotification = (notification: IPSResponse): void => {
    const config = new MatSnackBarConfig();
    config.duration = 3000;

    this.snackBar.open(notification.message, '', config);
  };

  public closeSocialLogin(): void {
    this.socialLoginService.setMode(MODE.NONE);
  }

  public ngOnDestroy(): void {
    this.nSubscription.unsubscribe();
  }
}