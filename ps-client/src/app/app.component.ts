import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
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
export class App {
    name = 'PS';
    url = 'https://photo-state.com';
    notifications: Observable<Array<IPSResponse>>;
    slMode: Observable<MODE>;

    constructor(private appState: AppService, private psHtp: PsHttp, private socialLoginService: SocialLoginService) {
        this.notifications = appState.getNotifications()
            .map((notifications: Array<IPSResponse>) => notifications.filter(({read}) => !read));

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

    closeSocialLogin = () => this.socialLoginService.setMode(MODE.NONE);
}