import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SlideService } from "../slides/slides.service";

import { AppState } from "../app.service";
import { Slide } from "../slides/slide";

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ps-carousel',
  providers: [SlideService],
  styles: [require('./carousel.css')],
  template: require('./carousel.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel {

  public slides: Observable<Slide> = [];

  public errorMessage = '';

  constructor(private slideService: SlideService) {
    this.slides = this.slideService.getSlides();
    this.slideService.fetchSlides();
  }
}
