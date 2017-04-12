import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { UserBoardComponent } from './user-board.component';
import { FooterBarModule } from '../../footer-bar';
import { SideBarModule } from '../../side-bar';
import { ProfileModule } from '../../profile';


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
        MaterialModule.forRoot(),
        MaterialModule,
        FormsModule,
        FooterBarModule,
        ReactiveFormsModule
    ],
    exports: [UserBoardComponent],
    providers: []
})
export class UserBoardModule {
    constructor() {}
}
