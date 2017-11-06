import { Action } from '@ngrx/store';

import { AppActions } from '../../app.actions';
import { IContact } from './IContact';


export const dirtyContact = (contact: IContact, action: Action) => {
  let result: IContact;

  switch (action.type) {
    case AppActions.SET_DIRTY_CONTACT:
      result = {...action.payload};
      break;

    case AppActions.MESSAGE_POST_SUCCESS:
      result = {
        name: contact.name,
        message: '',
        email: contact.email
      };
      break;

    default:
      result = contact;
      break;
  }

  return result;
};
