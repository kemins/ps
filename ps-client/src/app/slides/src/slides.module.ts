import { NgModule } from '@angular/core';
import { SlideService } from './slides.service';
import { SlideDataService } from './slides-data.service';
import { SlidesEffectService } from './slides-effect.service';
import { Carousel } from './carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        Carousel
    ],
    exports: [Carousel],
    imports: [
        CommonModule,
        CarouselModule,
        EffectsModule.run(SlidesEffectService)
    ],
    providers: [
        SlideService,
        SlideDataService,
        SlidesEffectService
    ]
})
export class SlidesModule {
    constructor() {}
}
