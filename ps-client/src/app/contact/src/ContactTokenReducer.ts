import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';

export const contactToken = (token: string, action: Action) => {
  let result: string;

  switch (action.type) {
    case AppActions.SET_CONTACT_TOKEN:
      result = action.payload;
      break;

    default:
      result = token;
      break;
  }

  return result;
};
