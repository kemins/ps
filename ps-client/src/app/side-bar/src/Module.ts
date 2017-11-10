import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SideBarComponent } from './SideBarComponent';
import { SideBarService } from './SideBarService';
import { SideBarItemComponent } from './SideBarItemComponent';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [SideBarComponent],
  providers: [SideBarService],
  declarations: [
    SideBarComponent,
    SideBarItemComponent
  ]
})
export class SideBarModule {
  public constructor() {
  }
}