import { NgModule } from '@angular/core';
import { SlideService } from './slides.service';
import { SlideDataService } from './slides-data.service';
import { SlidesEffectService } from './slides-effect.service';
import { Carousel } from './carousel.component';
import { CarouselComponent, SlideComponent } from 'ng2-bootstrap';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        CarouselComponent,
        SlideComponent,
        Carousel
    ],
    exports: [Carousel],
    imports: [
        CommonModule,
        EffectsModule.runAfterBootstrap(SlidesEffectService)
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
