import { Observable } from 'rxjs/Observable';
import { ISlide } from './slides';
import { IPSResponse } from './core';
import { IBarAction } from './footer-bar';
import { MODE } from './social-login';
import { IProfile, IPicture } from './profile';
import { IAlbum } from './albums';
import { IContact } from './contact';

export interface IAppStore {
  notifications: Observable<Array<IPSResponse>>
  socialLogin: {
    mode: Observable<MODE>
  },
  slides: Observable<Array<ISlide>>
  notes: Observable<Array<IPSResponse>>
  contact: {
    value: Observable<IContact>,
    dirtyValue: Observable<IContact>,
    token: Observable<string>
  },
  profile: {
    value: Observable<IProfile>,
    dirtyValue: Observable<IProfile>,
    avatar: Observable<IPicture>
    dirtyAvatar: Observable<IPicture>
  },
  albums: {
    newAlbum: Observable<IAlbum>
  },
  footerActions: Observable<Array<IBarAction>>;
  sideBarActions: Observable<Array<IBarAction>>;
  sideBarCurrentAction: Observable<IBarAction>
}
