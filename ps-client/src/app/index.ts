// App
export * from './app.component';
export * from './app.service';

import { AppState } from './app.service';
import {OneAllAPI} from './social-login/oneall.ts';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];

new OneAllAPI()
  .bootstrap()
  .showLoginWidget();
