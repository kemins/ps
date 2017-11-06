import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './HomeComponent';
import { SlidesModule } from '../../slides';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        SlidesModule,
        RouterModule,
        CoreModule,
        AlertModule.forRoot(),
        HttpModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [HomeComponent],
    providers: []
})
export class HomeModule {
    constructor() {}
}
