// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// Hammer.js
// We need to import this library in order for Material to work
// Material needs this for md-tooltips
import 'hammerjs/hammer.js';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/Rx';


import 'lodash/';

import 'bootstrap/fonts/glyphicons-halflings-regular.svg';
import 'bootstrap/fonts/glyphicons-halflings-regular.eot';
import 'bootstrap/fonts/glyphicons-halflings-regular.ttf';
import 'bootstrap/fonts/glyphicons-halflings-regular.woff';
import 'bootstrap/fonts/glyphicons-halflings-regular.woff2';

if ('production' === ENV) {
  // Production


} else {
  // Development

}
