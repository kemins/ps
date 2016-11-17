import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Slide } from './..';
import { AppActions } from '../../app.actions';
import { AppStore } from '../../app.state';

@Injectable()
export class SlideService {
  constructor(private store: Store<AppStore>) {}

  getSlides = () : Observable<Slide[]> => this.store.select<Slide[]>('slides');

  fetchSlides = () => this.store.dispatch({type: AppActions.FETCH_SLIDES});
}