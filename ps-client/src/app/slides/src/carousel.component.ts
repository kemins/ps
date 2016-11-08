import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Slide } from './slide.model';
import { SlideService } from './slides.service';

@Component({
  selector: 'ps-slide-carousel',
  styles: [require('./carousel.css')],
  template: require('./carousel.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel {

  public slides: Observable<Array<Slide>>;

  constructor(private slideService: SlideService) {
    this.slides = this.slideService.getSlides();
    this.slideService.fetchSlides();
  }
}
