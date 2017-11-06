import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as albumsStyles from './albums.styl';

@Component({
  selector: 'ps-albums',
  styles: [albumsStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './albums.html'
})
export class AlbumsComponent {}
