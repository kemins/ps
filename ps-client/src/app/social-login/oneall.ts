import { AppSettings } from "../core/app-settings";

export enum MODE {
  SIGN_IN,
  SIGN_UP
}
export class OneAllAPI {
  private static instance;

  _signUpCallback: Function;
  _signInCallback: Function;

  mode: MODE;

  public static getInstance = () => {
    if (!OneAllAPI.instance) {
      OneAllAPI.instance = new OneAllAPI();
    }
    return OneAllAPI.instance;
  };

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

    oneall.push(['social_login', 'set_grid_sizes', [2,2]]);
    //oneall.push(['social_login', 'attach_onclick_popup_ui', 'oa_sign_up']);

    return this;
  }

  onLoginRedirect = (data) => {
    if (this.mode === MODE.SIGN_UP && this._signUpCallback) {
      this._signUpCallback(data);
    } else if (this.mode === MODE.SIGN_IN && this._signInCallback) {
      this._signInCallback(data);
    }
    return false;
  };

  set signUpCallback(callback: Function) {
    this._signUpCallback = callback;
  }

  set signInCallback(callback: Function) {
    this._signInCallback = callback;
  }
}