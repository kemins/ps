import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IAlbum } from './IAlbum';
import { AppActions } from '../../AppActions';
import { AlbumService } from './AlbumService';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../IAppState';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumsResolver implements Resolve<boolean> {
  public constructor(private store: Store<IAppStore>) {
  }

  public resolve(): boolean {
    this.store.dispatch({type: AppActions.LOAD_USER_ALBUMS});

    return true;
  }
}
