import { Injectable } from '@angular/core';

import { Slide } from './slide';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

export enum SLIDES {
  FETCH = 'FETCH_SLIDES',
  FETCH_SUCCESS = 'FETCH_SLIDE_SUCCESS',
  FETCH_FAIL = 'FETCH_SLIDES_FAIL'
}

@Injectable()
export class SlideService {
  constructor(private store: Store) {}

  getSlides(): Observable<Slide[]> {
    return this.store.select('slides');
  }

  fetchSlides(): void {
    this.store.dispatch({
      type: SLIDES[SLIDES.FETCH],
      payload: {}
    });
  }
}