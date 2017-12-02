import { ISlide } from './slides';
import { IPSResponse } from './core';
import { IBarAction } from './footer-bar';
import { MODE } from './social-login';
import { IPicture, IProfile } from './profile';
import { IAlbum } from './albums';
import { IContact } from './contact';

export interface IAppStore {
  notifications: Array<IPSResponse>;
  socialLogin: {
    mode: MODE
  };
  slides: Array<ISlide>;
  contact: {
    value: IContact,
    dirtyValue: IContact,
    token: string
  },
  profile: {
    value: IProfile,
    dirtyValue: IProfile,
    avatar?: IPicture,
    dirtyAvatar?: IPicture
  };
  albums: {
    newAlbum: IAlbum,
    userAlbums: Array<IAlbum>
  };
  footerActions: Array<IBarAction>;
  sideBarActions: Array<IBarAction>;
  sideBarCurrentAction: IBarAction
}
