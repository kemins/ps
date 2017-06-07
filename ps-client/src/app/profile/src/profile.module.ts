import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { ProfileComponent, ProfileService, ProfileDataService, ProfileEffectService } from './../';
import { ValidatorModule } from '../../validators';
import { FileUploader } from '../../core';


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
    ValidatorModule
  ],
  exports: [ProfileComponent],
  providers: [
    ProfileService,
    ProfileDataService,
    ProfileEffectService,
    FileUploader
  ]
})
export class ProfileModule {
  constructor() {
  }
}
