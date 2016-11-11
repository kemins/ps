import { Action } from '@ngrx/store';

import { AppActions } from '../../app.actions';
import { Contact } from './contact.model';


export const dirtyContact = (contact:Contact, action:Action) => {
    let result:Contact;

    switch (action.type) {
        case AppActions.SET_DIRTY_CONTACT:
            result = Object.assign({}, action.payload);
            break;

        default:
            result = contact;
            break;
    }

    return result;
};