import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { SocialLoginService } from './social-login';
import { IPSResponse, PsHttp } from './core';
import * as normalizeStyles from 'normalize.css/normalize.css';
import * as bootstrapStyles from 'bootstrap/dist/css/bootstrap.css';
import * as appStyles from './app.styl';
import * as mdStyles from '@angular/material/core/theming/prebuilt/deeppurple-amber.css';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    normalizeStyles,
    bootstrapStyles,
    mdStyles,
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

  constructor(private appState: AppService, private psHtp: PsHttp) {
    this.notifications = appState.getNotifications()
      .map((notifications: Array<IPSResponse>) => notifications.filter(({read}) => !read));
  }

  get pendingRequests() {
    return this.psHtp.pendingRequests;
  }
}