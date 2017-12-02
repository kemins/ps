import { IBarAction } from './../../footer-bar';
import { AppActions } from '../../AppActions';
import { IPayloadAction } from '../../core/src/IPayloadAction';


export const sideBarCurrentAction = (barActions: IBarAction, action: IPayloadAction) => {
  let result: IBarAction;

  switch (action.type) {
    case AppActions.SET_CURRENT_ACTION:
      result = Object.assign({}, action.payload);
      break;

    default:
      result = barActions;
      break;
  }

  return result;
};