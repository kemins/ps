export class OneAllAPI {
  oneallSsubdomain: string = 'photo-state';
  loginScript: string = 'http://localhost:7000/signin';

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
    oneall.push(['social_login', 'set_callback_uri', this.loginScript]);
    //oneall.push(['social_login', 'do_render_ui', 'oa_social_login_container']);

    oneall.push(['social_login', 'set_custom_css_uri',  'https://secure.oneallcdn.com/css/api/themes/beveled_connect_w208_h30_wc_v1.css']);
    oneall.push(['social_login', 'set_grid_sizes', [2,2]]);
    oneall.push(['social_login', 'attach_onclick_popup_ui', 'oa_sign_in']);

    return this;
  }
}