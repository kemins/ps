import { Component } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap';
import {SlideService} from "../slides/slides.service";


@Component({
  selector: 'ps-carousel',
  providers: [SlideService],
  directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes: [],
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
