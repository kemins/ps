import { AppActions } from '../../AppActions';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const contactToken = (token: string, action: IPayloadAction) => {
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
