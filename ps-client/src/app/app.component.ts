/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { PsHttp } from "./core/ps-http.service";

import * as _ from 'lodash';
import { OneAllAPI } from "./social-login/oneall";
import {OneAllAPI} from "./social-login/oneall";

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
  name = 'PS';
  url = 'https://photo-state.com';

  constructor(
    private appState: AppState,
    private psHtp: PsHttp) {
    appState.signUpSubscriber = this.onSignUp;
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

  get isSignUp() {
    return this.appState.get('isSignUp');
  }

  get notificationType() {
    let types = {
      fault: 'danger'
    };

    return _.get(types, this.appState.get('notificationType'),
        this.appState.get('notificationType'));
  }

  closeNotification = () => this.appState.showNotification(null);

  openSignUp = () => this.appState.set('isSignUp', true);

  closeSignUp = () => this.appState.set('isSignUp', false);

  onSignUp = (data) => {
    this.appState.showNotification(data);
    this.closeSignUp();
  }
}