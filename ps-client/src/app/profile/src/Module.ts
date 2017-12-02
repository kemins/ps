import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule, FileUploaderService } from './../../core';
import { RouterModule } from '@angular/router';
import { ProfileComponent, ProfileDataService, ProfileEffectService, ProfileService } from './../';
import { ValidatorModule } from '../../validators';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatRadioModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

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
    FormsModule,
    ReactiveFormsModule,
    ValidatorModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  exports: [ProfileComponent],
  providers: [
    ProfileService,
    ProfileDataService,
    ProfileEffectService,
    FileUploaderService
  ]
})
export class ProfileModule {
  public constructor() {
  }
}
