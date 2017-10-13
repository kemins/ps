import { Action } from '@ngrx/store';

import { AppActions } from '../../app.actions';
import { Contact } from './contact.model';
import { Album } from './album.model';

export const newAlbum = (album: Album, action: Action) => {
  let result: Album;

  switch (action.type) {
    case AppActions.SET_NEW_ALBUM:
      result = {...action.payload};
      break;
  }

  return result;
};