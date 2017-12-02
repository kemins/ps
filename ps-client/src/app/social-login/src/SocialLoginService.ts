import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../core';
import { AppActions } from '../../AppActions';
import { Observable } from 'rxjs';
import { IAppStore } from '../../IAppState';

export enum MODE {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  NONE = 'NONE'
}

@Injectable()
export class SocialLoginService {
  private oneallSsubdomain: string = 'photo-state';
  private rootUrl = AppSettings.getSetting('endpoint');
  private authenticationEndpoint: string = `${this.rootUrl}users/authenticate`;

  public constructor(private store: Store<IAppStore>) {
    this.bootstrap();
    this.showLoginWidget();
  }

  public setMode(value: MODE) {
    this.store.dispatch({type: AppActions.SL_SET_MODE, payload: value});
  }

  public getMode(): Observable<MODE> {
    return this.store.select('socialLogin', 'mode');
  }

  public bootstrap() {
    /* The library is loaded asynchronously */
    const oa = document.createElement('script');

    oa.type = 'text/javascript';
    oa.async = true;
    oa.src = '//' + this.oneallSsubdomain + '.api.oneall.com/socialize/library.js';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(oa, s);
    return this;
  }

  public showLoginWidget() {
    if (!window['_oneall']) {
      window['_oneall'] = [];
    }

    const oneall = window['_oneall'];
    oneall.push(['social_login', 'set_providers', ['facebook', 'google']]);
    oneall.push(['social_login', 'set_event', 'on_login_redirect', this.onLoginRedirect]);
    oneall.push(['social_login', 'set_callback_uri', this.authenticationEndpoint]);
    oneall.push(['social_login', 'do_render_ui', 'oa_social_login_container']);

    oneall.push(['social_login', 'set_grid_sizes', [2, 2]]);
    //oneall.push(['social_login', 'attach_onclick_popup_ui', 'oa_sign_up']);

    return this;
  }

  public onLoginRedirect = (data) => {
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