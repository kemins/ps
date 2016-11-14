import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdModule } from '../../md.module';
import { FooterComponent } from './footer-bar.component';
import { FooterBarService } from './footer-bar.service';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MdModule.forRoot(),
    ],
    exports: [FooterComponent],
    declarations: [FooterComponent],
    providers: [FooterBarService]
})
export class FooterBarModule {
    constructor() {}
}
