import { Observable } from 'rxjs/Observable';
import { Slide } from './slides';
import { IPSResponse } from './core';
import { Contact } from './contact';
import { BarAction } from './footer-bar';
import { MODE } from './social-login';

export interface AppStore {
    notifications: Observable<Array<IPSResponse>>
    socialLogin: {mode: MODE},
    slides: Observable<Array<Slide>>
    notes: Observable<Array<IPSResponse>>
    contact: {
        value: Observable<Contact>,
        dirtyValue: Observable<Contact>,
        token: Observable<string>
    },
    footerBarActions: Observable<Array<BarAction>>;
}
