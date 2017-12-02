import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { AppActions } from '../../AppActions';
import { SlideDataService } from './SlidesDataService';
import { ISlide } from './ISlide';
import { IPayloadAction } from '../../core/src/IPayloadAction';


@Injectable()
export class SlidesEffectService {
  public constructor(private slideDataService: SlideDataService, private actions$: Actions<IPayloadAction>) {
  }

  @Effect()
  public fetchSlides$: Observable<IPayloadAction> = this.actions$
    .ofType(AppActions.FETCH_SLIDES)
    .switchMap((): Observable<Array<ISlide>> => this.slideDataService.fetchSlides())
    .map((slides: Array<ISlide>): IPayloadAction => ({type: AppActions.SLIDE_FETCH_SUCCESS, payload: slides}))
    .catch(() => Observable.of({type: AppActions.SLIDE_FETCH_FAIL}));
}
