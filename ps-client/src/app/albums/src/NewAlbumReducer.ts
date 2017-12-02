import { AppActions } from '../../AppActions';
import { IContact } from './IContact';
import { IAlbum } from './IAlbum';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const newAlbum = (album: IAlbum, action: IPayloadAction) => {
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
