import { Action } from '@ngrx/store';

import { AppActions } from '../../app.actions';
import { IContact } from './IContact';

export const contact = (contact: IContact, action: Action) => {
  let result: IContact;

  switch (action.type) {
    case AppActions.SET_CONTACT:
      result = Object.assign({}, action.payload);
      break;

    default:
      result = contact;
      break;
  }

  return result;
};
