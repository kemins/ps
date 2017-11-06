import {
  inject
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './AppComponent';
import { AppService } from './AppService';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  /*beforeEach(() => addProviders([
    AppService,
    App
  ]));*/

  it('should have a url', inject([ App ], (app) => {
    expect(app.url).toEqual('https://twitter.com/AngularClass');
  }));

});
