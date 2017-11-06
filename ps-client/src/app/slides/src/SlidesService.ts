import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISlide } from './..';
import { AppActions } from '../../AppActions';
import { IAppStore } from '../../IAppState';

@Injectable()
export class SlideService {
  public constructor(private store: Store<IAppStore>) {
  }

  public getSlides(): Observable<ISlide[]> {
    return this.store.select<ISlide[]>('slides');
  }

  public fetchSlides() {
    return this.store.dispatch({type: AppActions.FETCH_SLIDES});
  }
}
