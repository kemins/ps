import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
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
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
    declarations: [
        ProfileComponent,
    ],
    imports: [
        RouterModule,
        CoreModule,
        AlertModule.forRoot(),
        HttpModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ValidatorModule,
        FileUploadModule,
        EffectsModule.run(ProfileEffectService)
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
