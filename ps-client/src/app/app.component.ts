/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { PsHttp } from "./core/ps-http.service";

import * as _ from 'lodash';

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

  get notificationType() {
    let types = {
      fault: 'danger'
    };

    return _.get(types, this.appState.get('notificationType'),
        this.appState.get('notificationType'));
  }

  closeNotification = () => this.appState.showNotification(null);
}