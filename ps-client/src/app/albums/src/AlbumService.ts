import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { IContact } from './IContact';
import { IAppStore } from '../../IAppState';
import { IAlbum } from './IAlbum';
import { Observable } from 'rxjs/Observable';
import { CreateAlbumComponent } from './CreateAlbumComponent';
import { MatDialogRef } from '@angular/material';

@Injectable()
export class AlbumService {
  private _albumDialog: MatDialogRef<CreateAlbumComponent>;

  public constructor(private store: Store<IAppStore>) {
  }

  public setNewAlbum(album: IAlbum): void {
    this.store.dispatch({
      type: AppActions.SET_NEW_ALBUM,
      payload: album
    });
  };

  public getNewAlbum(): Observable<IAlbum> {
    return this.store.select('albums', 'newAlbum');
  }

  public getUserAlbums(): Observable<Array<IAlbum>> {
    return this.store.select('albums', 'userAlbums');
  }

  public get albumDialog(): MatDialogRef<CreateAlbumComponent> {
    return this._albumDialog;
  }

  public set albumDialog(dialog: MatDialogRef<CreateAlbumComponent>) {
    this._albumDialog = dialog;
  }

  public createAlbum(): void {
    this.store.dispatch({
      type: AppActions.CREATE_NEW_ALBUM
    });
  }
}
