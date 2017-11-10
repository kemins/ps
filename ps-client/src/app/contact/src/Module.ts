import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { ContactComponent, ContactDataService, ContactEffectService, ContactService } from './../';
import { ValidatorModule } from '../../validators';

@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        RouterModule,
        CoreModule,
        AlertModule,
        HttpModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ReCaptchaModule,
        ValidatorModule
    ],
    exports: [ContactComponent],
    providers: [
        ContactService,
        ContactDataService,
        ContactEffectService
    ]
})
export class ContactModule {
    constructor() {}
}