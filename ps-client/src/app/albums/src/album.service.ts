import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { Contact } from './contact.model';
import { AppStore } from '../../app.state';
import { Album } from './album.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {
  public constructor(private store: Store<AppStore>) {
  }

  public setNewAlbum(album: Album) {
    this.store.dispatch({
      type: AppActions.SET_NEW_ALBUM,
      payload: album
    });
  };

  public getNewAlbum(): Observable<Album> {
    return this.store.select<Album>('albums', 'newAlbum');
  }

  public createAlbum() {
    this.store.dispatch({
      type: AppActions.CREATE_NEW_ALBUM
    });
  }
}
