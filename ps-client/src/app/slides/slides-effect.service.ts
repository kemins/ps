import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { SLIDES } from "./slides.service";
import { SlideDataService } from "./slides-data.service";


@Injectable()
export class SlidesEffectService implements OnDestroy {
    constructor(private slideDataService: SlideDataService, private actions$: Actions) {}

    @Effect() fetch$: Observable<Action> = this.actions$
        .ofType(SLIDES[SLIDES.FETCH])
        .switchMap(() => this.slideDataService.fetchSlides())
        .map(slides => ({type: SLIDES[SLIDES.FETCH_SUCCESS], payload: slides}))
        .catch(() => Observable.of(SLIDES[SLIDES.FETCH_FAIL]));

    ngOnDestroy = () => {};
}