import { Component } from '@angular/core';

import {SlideService} from "../slides/slides.service";


@Component({
  selector: 'ps-carousel',
  providers: [SlideService],
  styles: [require('./carousel.css')],
  template: require('./carousel.html')
})
export class Carousel {

  public slides:Array<any> = [];

  public errorMessage = '';

  constructor(private slideService: SlideService) {
  }

  ngOnInit() {
    console.debug('Carousel component created');
    this.getSlides();
  }

  getSlides() {
    this.slideService.getSlides()
      .subscribe(
        slides => this.slides = slides,
        error =>  this.errorMessage = <any>error);
  }


  ngOnDestroy() {
    console.debug('Carousel component destroyed');
  }
}
