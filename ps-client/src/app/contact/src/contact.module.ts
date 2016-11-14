import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import {
    ContactComponent,
    ContactService,
    ContactDataService,
    ContactEffectService
} from './../';
import { ValidatorModule } from '../../validators';
import { MdModule } from '../../md.module';
import { NotificationsModule } from '../../notifications';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
        NotificationsModule,
        MdModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        ReCaptchaModule,
        ValidatorModule,
        EffectsModule.runAfterBootstrap(ContactEffectService)
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
