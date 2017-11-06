import { Action } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { ISlide } from './ISlide';

export const slides = (slides: ISlide[], action: Action) => {
  let result;

  switch (action.type) {
    case AppActions.SLIDE_FETCH_SUCCESS:
      result = action.payload;
      break;
    default:
      result = slides;
      break;
  }

  return result;
};