import { NgModule } from '@angular/core';
import { SlideService } from './SlidesService';
import { SlideDataService } from './SlidesDataService';
import { Carousel } from './CarouselComponent';
import { CarouselModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Carousel
  ],
  exports: [Carousel],
  imports: [
    CommonModule,
    CarouselModule
  ],
  providers: [
    SlideService,
    SlideDataService
  ]
})
export class SlidesModule {
  public constructor() {
  }
}
