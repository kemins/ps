import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as homeStyles from './home.styl';

@Component({
  selector: 'home',
  styles: [homeStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html'
})
export class HomeComponent {
  public constructor() {
  }
}
