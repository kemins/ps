import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
    ProfileComponent,
    ProfileService,
    ProfileDataService,
    ProfileEffectService
} from './../';
import { ValidatorModule } from '../../validators';


@NgModule({
    declarations: [
        ProfileComponent,
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
        ValidatorModule,
        EffectsModule.runAfterBootstrap(ProfileEffectService)
    ],
    exports: [ProfileComponent],
    providers: [
        ProfileService,
        ProfileDataService,
        ProfileEffectService
    ]
})
export class ProfileModule {
    constructor() {}
}
