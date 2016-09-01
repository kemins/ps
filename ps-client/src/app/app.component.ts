/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home';
import { Carousel } from './carousel';
import { RouterActive } from './router-active';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive, Carousel ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.styl'),
    require('bootstrap/dist/css/bootstrap.css')
  ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  constructor(
    public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}