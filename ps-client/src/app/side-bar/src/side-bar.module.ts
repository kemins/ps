import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SideBarComponent } from './side-bar.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MaterialModule
    ],
    exports: [SideBarComponent],
    declarations: [SideBarComponent]
})
export class SideBarModule {
    constructor() {}
}
