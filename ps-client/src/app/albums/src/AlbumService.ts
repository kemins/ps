import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { IContact } from './IContact';
import { IAppStore } from '../../IAppState';
import { IAlbum } from './IAlbum';
import { Observable } from 'rxjs/Observable';
import { CreateAlbumComponent } from './CreateAlbumComponent';
import { MdDialogRef } from '@angular/material';

@Injectable()
export class AlbumService {
  private _albumDialog: MdDialogRef<CreateAlbumComponent>;

  public constructor(private store: Store<IAppStore>) {
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

  public get albumDialog(): MdDialogRef<CreateAlbumComponent> {
    return this._albumDialog;
  }

  public set albumDialog(dialog: MdDialogRef<CreateAlbumComponent>) {
    this._albumDialog = dialog;
  }

  public createAlbum(): void {
    this.store.dispatch({
      type: AppActions.CREATE_NEW_ALBUM
    });
  }
}
