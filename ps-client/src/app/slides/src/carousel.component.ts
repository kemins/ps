import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Slide } from './slide.model';
import { SlideService } from './slides.service';

import * as carouselStyles from './carousel.styl';

@Component({
  selector: 'ps-slide-carousel',
  styles: [carouselStyles],
  templateUrl: 'carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel {

  public slides: Observable<Array<Slide>>;

  constructor(private slideService: SlideService) {
    this.slides = this.slideService.getSlides();
    this.slideService.fetchSlides();
  }
}
