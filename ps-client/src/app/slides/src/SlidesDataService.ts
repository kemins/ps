import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ISlide } from './../';
import { AppSettings } from '../../core';
import { chain } from 'lodash';

@Injectable()
export class SlideDataService {
  constructor(private http: Http) {
  }

  private slideUrl = `${AppSettings.getSetting('endpoint')}slides/`;

  public fetchSlides(): Observable<ISlide[]> {
    return this.http.get(this.slideUrl)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    const data = res.json(),
      {slides} = data.body;

    return chain(slides)
      .map(({creationDate, url}) => ({
        url,
        creationDate: creationDate ? new Date(creationDate) : null
      }))
      .shuffle()
      .value();
  }
}
