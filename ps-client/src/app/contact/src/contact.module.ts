import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';

import {
    ContactComponent,
    ContactService,
    ContactDataService,
    ContactEffectService
} from './../';
import { ValidatorModule } from '../../validators';
import { MdModule } from '../../md.module';
import { NotificationsModule } from '../../notifications';


@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        CoreModule,
        AlertModule,
        HttpModule,
        CommonModule,
        NotificationsModule,
        MdModule.forRoot(),
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
