import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './HomeComponent';
import { SlidesModule } from '../../slides';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SlidesModule,
    RouterModule,
    CoreModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule {
  constructor() {
  }
}
