import { Observable } from 'rxjs/Observable';
import { Slide } from './slides';
import { IPSResponse } from './core';
import { Contact } from './contact';
import { BarAction } from './footer-bar';
import { MODE } from './social-login';
import { Profile, Picture } from './profile';
import { IAlbum } from './albums/src/IAlbum';
import { MdDialogRef } from '@angular/material';
import { CreateAlbumComponent } from './albums/src/create-album.component';

export interface AppStore {
  notifications: Observable<Array<IPSResponse>>
  socialLogin: {
    mode: Observable<MODE>
  },
  slides: Observable<Array<Slide>>
  notes: Observable<Array<IPSResponse>>
  contact: {
    value: Observable<Contact>,
    dirtyValue: Observable<Contact>,
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
  footerActions: Observable<Array<BarAction>>;
  sideBarActions: Observable<Array<BarAction>>;
  sideBarCurrentAction: Observable<BarAction>
}
