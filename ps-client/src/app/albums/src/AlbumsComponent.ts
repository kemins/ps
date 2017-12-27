import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as albumsStyles from './albums.styl';
import { AlbumService } from './AlbumService';
import { Observable } from 'rxjs/Observable';
import { IAlbum } from './IAlbum';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'ps-albums',
  styles: [albumsStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './albums.html'
})
export class AlbumsComponent {
  private albums: Observable<Array<IAlbum>>;
  public datSource: MatTableDataSource<IAlbum>;

  public constructor(private albumService: AlbumService) {
    this.albums = this.albumService.getUserAlbums();
    this.datSource = new MatTableDataSource();

    this.albums.subscribe((albums: Array<IAlbum>) => {
      this.datSource.data = albums;
    });
  }
}
