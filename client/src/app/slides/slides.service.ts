import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Slide } from './slide';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class SlideService {
  constructor(private http: Http) {}

  private slideUrl = 'http://localhost:7000/slides';

  getSlides(): Observable<Slide[]> {
    return this.http.get(this.slideUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json(),
      slides = body.slides || [];

    return slides.map(function(slide) {
      if (slide.creationDate) {
        slide.creationDate = new Date(slide.creationDate);
      }

      return slide;
    });
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
