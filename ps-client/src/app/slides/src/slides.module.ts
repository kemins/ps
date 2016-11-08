import { NgModule } from '@angular/core';
import { SlideService } from './slides.service';
import { SlideDataService } from './slides-data.service';
import { SlidesEffectService } from './slides-effect.service';

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        SlideService,
        SlideDataService,
        SlidesEffectService
    ]
})
export class SlidesModule {
    constructor() {}
}
