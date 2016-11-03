import { Slide } from "./slide";

import { Action } from '@ngrx/store';
import { AppActions } from '../app.actions';

export const slides = (slides: Slide[], action: Action) => {
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