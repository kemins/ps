import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as albumsStyles from './albums.styl';
import { AlbumService } from './AlbumService';
import { Observable } from 'rxjs/Observable';
import { IAlbum } from './IAlbum';

@Component({
  selector: 'ps-albums',
  styles: [albumsStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './albums.html'
})
export class AlbumsComponent {
  private albums: Observable<Array<IAlbum>>;

  public constructor(private albumService: AlbumService) {
    this.albums = this.albumService.getUserAlbums();
  }
}
