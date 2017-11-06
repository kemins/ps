import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { UserBoardComponent } from './UserBoardComponent';
import { FooterBarModule } from '../../footer-bar';
import { SideBarModule } from '../../side-bar';
import { ProfileModule } from '../../profile';
import { AlbumsModule } from '../../albums';


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
        ReactiveFormsModule,
        AlbumsModule
    ],
    exports: [UserBoardComponent],
    providers: []
})
export class UserBoardModule {
    constructor() {}
}
