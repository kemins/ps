import { AppActions } from '../../AppActions';
import { IContact } from './IContact';
import { IAlbum } from './IAlbum';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const userAlbums = (albums: Array<IAlbum>, action: IPayloadAction) => {
  let result: Array<IAlbum>;

  switch (action.type) {
    case AppActions.SET_USER_ALBUMS:
      result = [...action.payload];
      break;
    default:
      result = albums;
      break;
  }

  return result;
};
