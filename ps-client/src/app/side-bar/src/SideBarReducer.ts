import { IBarAction } from './../../footer-bar';
import { AppActions } from '../../AppActions';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const sideBarActions = (barActions: IBarAction[], action: IPayloadAction) => {
  let result: IBarAction[];

  switch (action.type) {
    case AppActions.SET_SIDE_BarActionS:
      result = [...action.payload];
      break;

    default:
      result = barActions;
      break;
  }

  return result;
};