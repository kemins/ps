import { AppActions } from '../../AppActions';
import { IContact } from './IContact';
import { IPayloadAction } from '../../core/src/IPayloadAction';


export const dirtyContact = (contact: IContact, action: IPayloadAction) => {
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
