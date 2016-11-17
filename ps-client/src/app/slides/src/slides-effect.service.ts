import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { SlideDataService } from './slides-data.service';


@Injectable()
export class SlidesEffectService {
    constructor(private slideDataService: SlideDataService, private actions$: Actions) {}

    @Effect() fetchSlides$: Observable<Action> = this.actions$
        .ofType(AppActions.FETCH_SLIDES)
        .switchMap(() => this.slideDataService.fetchSlides())
        .map(slides => ({type: AppActions.SLIDE_FETCH_SUCCESS, payload: slides}))
        .catch(() => Observable.of(AppActions.SLIDE_FETCH_FAIL));
}