import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { UserBoardComponent } from './UserBoardComponent';
import { FooterBarModule } from '../../footer-bar';
import { SideBarModule } from '../../side-bar';
import { ProfileModule } from '../../profile';
import { AlbumsModule } from '../../albums';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [UserBoardComponent],
  imports: [
    RouterModule,
    CoreModule,
    AlertModule.forRoot(),
    HttpModule,
    CommonModule,
    SideBarModule,
    ProfileModule,
    FormsModule,
    FooterBarModule,
    ReactiveFormsModule,
    AlbumsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  exports: [UserBoardComponent],
  providers: []
})
export class UserBoardModule {
  constructor() {
  }
}
