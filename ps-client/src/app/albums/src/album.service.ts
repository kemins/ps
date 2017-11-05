import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { Contact } from './contact.model';
import { AppStore } from '../../app.state';
import { IAlbum } from './IAlbum';
import { Observable } from 'rxjs/Observable';
import { CreateAlbumComponent } from './create-album.component';
import { MdDialogRef } from '@angular/material';

@Injectable()
export class AlbumService {
  private newAlbumDialog: MdDialogRef<CreateAlbumComponent>;

  public constructor(private store: Store<AppStore>) {
  }

  public setNewAlbum(album: IAlbum): void {
    this.store.dispatch({
      type: AppActions.SET_NEW_ALBUM,
      payload: album
    });
  };

  public getNewAlbum(): Observable<IAlbum> {
    return this.store.select<IAlbum>('albums', 'newAlbum');
  }

  public getAlbumDialog(): MdDialogRef<CreateAlbumComponent> {
    return this.newAlbumDialog;
  }

  public setAlbumDialog(dialog: MdDialogRef<CreateAlbumComponent>): void {
    this.newAlbumDialog = dialog;
  }

  public createAlbum(): void {
    this.store.dispatch({
      type: AppActions.CREATE_NEW_ALBUM
    });
  }
}
