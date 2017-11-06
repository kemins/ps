import { Observable } from 'rxjs/Observable';
import { Slide } from './slides';
import { IPSResponse } from './core';
import { IBarAction } from './footer-bar';
import { MODE } from './social-login';
import { Profile, Picture } from './profile';
import { IAlbum } from './albums';
import { IContact } from './contact';

export interface AppStore {
  notifications: Observable<Array<IPSResponse>>
  socialLogin: {
    mode: Observable<MODE>
  },
  slides: Observable<Array<Slide>>
  notes: Observable<Array<IPSResponse>>
  contact: {
    value: Observable<IContact>,
    dirtyValue: Observable<IContact>,
    token: Observable<string>
  },
  profile: {
    value: Observable<Profile>,
    dirtyValue: Observable<Profile>,
    avatar: Observable<Picture>
    dirtyAvatar: Observable<Picture>
  },
  albums: {
    newAlbum: Observable<IAlbum>
  },
  footerActions: Observable<Array<IBarAction>>;
  sideBarActions: Observable<Array<IBarAction>>;
  sideBarCurrentAction: Observable<IBarAction>
}
