import { AppSettings } from "../core/app-settings";

export class OneAllAPI {
  private static instance;

  _signUpCallback: Function;

  public static getInstance = () => {
    if (!OneAllAPI.instance) {
      OneAllAPI.instance = new OneAllAPI();
    }
    return OneAllAPI.instance;
  };

  oneallSsubdomain: string = 'photo-state';
  rootUrl = AppSettings.getSetting('endpoint');
  signInScript: string = this.rootUrl + 'users/signin';
  signUpScript: string = this.rootUrl + 'users/signup';

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
    oneall.push(['social_login', 'set_callback_uri', this.signUpScript]);
    oneall.push(['social_login', 'do_render_ui', 'oa_social_login_container']);

    oneall.push(['social_login', 'set_grid_sizes', [2,2]]);
    //oneall.push(['social_login', 'attach_onclick_popup_ui', 'oa_sign_up']);

    return this;
  }

  onLoginRedirect = (data) => {
    if (this._signUpCallback) {
      this._signUpCallback(data);
    }
    return false;
  };

  set signUpCallback(callback: Function) {
    this._signUpCallback = callback;
  }
}