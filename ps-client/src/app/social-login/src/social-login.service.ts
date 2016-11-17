import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../core';
import { AppActions } from '../../app.actions';
import { Observable } from 'rxjs';
import { AppStore } from '../../app.state';

export enum MODE {SIGN_IN, SIGN_UP, NONE}

@Injectable()
export class SocialLoginService {
  constructor(private store: Store<AppStore>) {
    this.bootstrap();
    this.showLoginWidget();
  }

  setMode = (value: MODE) => {
    this.store.dispatch({type: AppActions.SL_SET_MODE, payload: value});
  };

  getMode = (): Observable<MODE> => this.store.select<MODE>('socialLogin', 'mode');

  oneallSsubdomain: string = 'photo-state';
  rootUrl = AppSettings.getSetting('endpoint');
  authenticationEndpoint: string = this.rootUrl + 'users/authenticate';

  bootstrap() {
    /* The library is loaded asynchronously */
    let oa = document.createElement('script');

    oa.type = 'text/javascript';
    oa.async = true;
    oa.src = '//' + this.oneallSsubdomain + '.api.oneall.com/socialize/library.js';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(oa, s);
    return this;
  }

  showLoginWidget() {
    if (!window['_oneall']) {
      window['_oneall'] = [];
    }

    let oneall = window['_oneall'];
    oneall.push(['social_login', 'set_providers', ['facebook', 'google']]);
    oneall.push(['social_login', 'set_event', 'on_login_redirect', this.onLoginRedirect]);
    oneall.push(['social_login', 'set_callback_uri', this.authenticationEndpoint]);
    oneall.push(['social_login', 'do_render_ui', 'oa_social_login_container']);

    oneall.push(['social_login', 'set_grid_sizes', [2, 2]]);
    //oneall.push(['social_login', 'attach_onclick_popup_ui', 'oa_sign_up']);

    return this;
  }

  onLoginRedirect = (data) => {
    let types = {
      [MODE.SIGN_IN]: AppActions.SIGN_IN_WITH_TOKE,
      [MODE.SIGN_UP]: AppActions.SIGN_UP_WITH_TOKE,
    };

    this.getMode().first().subscribe((mode) => {
      let type = types[mode];

      this.store.dispatch({
        type: type,
        payload: data
      });
    });

    return false;
  };
}