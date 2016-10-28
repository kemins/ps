import { Slide } from "./slide";
import { SLIDES } from "./slides.service";

import { Action } from '@ngrx/store';

export const slides = (slides: Slide[], action: Action) => {
    let result;

    switch (action.type) {
        case SLIDES[SLIDES.FETCH_SUCCESS]:
            result = action.payload;
            break;
        default:
            result = slides;
            break;
    }

    return result;
};