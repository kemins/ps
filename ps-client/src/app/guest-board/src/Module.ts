import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { GuestBoardComponent } from './GuestBoardComponent';
import { FooterBarModule } from '../../footer-bar';
import { SideBarModule } from '../../side-bar';
import { HomeModule } from '../../home';
import { ContactModule } from '../../contact';
import { SocialLoginModule } from '../../social-login';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [GuestBoardComponent],
  imports: [
    RouterModule,
    CoreModule,
    AlertModule.forRoot(),
    HttpModule,
    CommonModule,
    FormsModule,
    SideBarModule,
    HomeModule,
    ContactModule,
    SocialLoginModule,
    FooterBarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  exports: [GuestBoardComponent],
  providers: []
})
export class GuestBoardModule {
  public constructor() {
  }
}
