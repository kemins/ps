import { Observable } from 'rxjs/Observable';
import { Slide } from './slides';
import { IPSResponse } from './core';
import { Contact } from './contact';
import { BarAction } from './footer-bar';
import { MODE } from './social-login';
import { Profile } from './profile';

export interface AppStore{
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
    },
    footerActions: Observable<Array<BarAction>>;
}
