import { Component } from '@angular/core';

import * as homeStyles from './home.styl';

@Component({
  selector: 'home',
  styles: [homeStyles],
  templateUrl: 'home.html'
})
export class HomeComponent {
  constructor() {}
}
