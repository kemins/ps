import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './FooterBarComponent';
import { FooterBarService } from './FooterBarService';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent],
  providers: [FooterBarService]
})
export class FooterBarModule {
  constructor() {
  }
}
