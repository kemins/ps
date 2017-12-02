import { AppActions } from '../../AppActions';
import { ISlide } from './ISlide';
import { IPayloadAction } from '../../core/src/IPayloadAction';

export const slides = (slides: ISlide[], action: IPayloadAction) => {
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