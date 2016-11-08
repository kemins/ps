import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Slide } from './../';
import { AppSettings } from '../../core';

@Injectable()
export class SlideDataService {
    constructor(private http: Http) {}

    private slideUrl = AppSettings.getSetting('endpoint') + 'slides';

    fetchSlides(): Observable<Slide[]> {
        return this.http.get(this.slideUrl)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json(),
            slides = body.slides || [];

        return slides.map(function(slide) {
            if (slide.creationDate) {
                slide.creationDate = new Date((slide.creationDate as string));
            }

            return slide;
        });
    }
}