import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISlide } from './..';
import { AppActions } from '../../app.actions';
import { AppStore } from '../../app.state';

@Injectable()
export class SlideService {
  public constructor(private store: Store<AppStore>) {
  }

  public getSlides(): Observable<ISlide[]> {
    return this.store.select<ISlide[]>('slides');
  }

  public fetchSlides() {
    return this.store.dispatch({type: AppActions.FETCH_SLIDES});
  }
}
