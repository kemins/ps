import { Action } from '@ngrx/store';
import { IBarAction } from './IBarAction';
import { AppActions } from '../../app.actions';


export const footerActions = (barActions: IBarAction[], action: Action) => {
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
