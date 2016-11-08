import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { MdModule } from '../../md.module';
import { Home } from './home.component';
import { SlidesModule } from '../../slides';


@NgModule({
    declarations: [Home],
    imports: [
        SlidesModule,
        RouterModule,
        CoreModule,
        AlertModule,
        HttpModule,
        CommonModule,
        MdModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [Home],
    providers: []
})
export class HomeModule {
    constructor() {}
}
