import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SlideService, Slide } from '../slides';

@Component({
  selector: 'ps-carousel',
  providers: [SlideService],
  styles: [require('./carousel.css')],
  template: require('./carousel.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel {

  public slides: Observable<Slide>;

  public errorMessage = '';

  constructor(private slideService: SlideService) {
    this.slides = this.slideService.getSlides();
    this.slideService.fetchSlides();
  }
}
