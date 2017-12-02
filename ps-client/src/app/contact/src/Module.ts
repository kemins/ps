import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { ContactComponent, ContactDataService, ContactEffectService, ContactService } from './../';
import { ValidatorModule } from '../../validators';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';

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
    FormsModule,
    ReactiveFormsModule,
    ReCaptchaModule,
    ValidatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [ContactComponent],
  providers: [
    ContactService,
    ContactDataService,
    ContactEffectService
  ]
})
export class ContactModule {
  constructor() {
  }
}
