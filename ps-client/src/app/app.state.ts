import { Observable } from 'rxjs/Observable';
import { Slide } from './slides';
import { IPSResponse } from './core';
import { Contact } from './contact';

export interface AppStore {
    slides: Observable<Array<Slide>>
    notes: Observable<Array<IPSResponse>>
    contact: Observable<Contact>;
}

export const defaultState = {
    slides: [],
    notifications: [],
    contact: {
        value: new Contact('Andrew', 'Test', 'andriy.kemin@gmail.com'),
        token: 'test2'
    }
};