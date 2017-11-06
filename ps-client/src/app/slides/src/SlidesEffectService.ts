import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppActions } from '../../AppActions';
import { SlideDataService } from './SlidesDataService';
import { ISlide } from './ISlide';


@Injectable()
export class SlidesEffectService {
  public constructor(private slideDataService: SlideDataService, private actions$: Actions) {
  }

  @Effect()
  public fetchSlides$: Observable<Action> = this.actions$
    .ofType(AppActions.FETCH_SLIDES)
    .switchMap((): Observable<Array<ISlide>> => this.slideDataService.fetchSlides())
    .map((slides: Array<ISlide>): Action => ({type: AppActions.SLIDE_FETCH_SUCCESS, payload: slides}))
    .catch(() => Observable.of(AppActions.SLIDE_FETCH_FAIL));
}
