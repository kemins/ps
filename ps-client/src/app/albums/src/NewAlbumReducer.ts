import { Action } from '@ngrx/store';

import { AppActions } from '../../AppActions';
import { IContact } from './IContact';
import { IAlbum } from './IAlbum';

export const newAlbum = (album: IAlbum, action: Action) => {
  let result: IAlbum;

  switch (action.type) {
    case AppActions.SET_NEW_ALBUM:
      result = {...action.payload};
      break;
    default:
      result = album;
      break;
  }

  return result;
};
