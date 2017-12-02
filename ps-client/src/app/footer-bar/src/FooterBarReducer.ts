import { IBarAction } from './IBarAction';
import { AppActions } from '../../AppActions';
import { IPayloadAction } from '../../core/src/IPayloadAction';


export const footerActions = (barActions: IBarAction[], action: IPayloadAction) => {
  let result: IBarAction[];

  switch (action.type) {
    case AppActions.SET_FOOTER_ACTIONS:
      result = [...action.payload];
      break;
    default:
      result = barActions;
      break;
  }

  return result;
};
