import { AppActions } from '../../AppActions';
import { IContact } from './IContact';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const contact = (contact: IContact, action: IPayloadAction) => {
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
