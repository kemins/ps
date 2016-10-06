/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { PsHttp } from "./core/ps-http.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    require('normalize.css'),
    require('./app.styl'),
    require('bootstrap/dist/css/bootstrap.css')
  ],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class App {
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    private appState: AppState,
    private psHtp: PsHttp) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  get pendingRequests() {
    return this.psHtp.pendingRequests;
  }

  get notificationMessage() {
    return this.appState.get('notificationMessage');
  }

  closeNotification = () => this.appState.set('notificationMessage', '');
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
