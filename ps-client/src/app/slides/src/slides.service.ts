import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Slide } from './..';
import { AppActions } from '../../app.actions';

@Injectable()
export class SlideService {
  constructor(private store: Store) {}

  getSlides = () : Observable<Slide[]> => this.store.select('slides');

  fetchSlides = () => this.store.dispatch({type: AppActions.FETCH_SLIDES});
}