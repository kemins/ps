import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './SideBarComponent';
import { SideBarService } from './SideBarService';
import { SideBarItemComponent } from './SideBarItemComponent';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
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
