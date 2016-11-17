import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { UserBoardComponent } from './user-board.component';
import { FooterBarModule } from '../../footer-bar';


@NgModule({
    declarations: [UserBoardComponent],
    imports: [
        RouterModule,
        CoreModule,
        AlertModule,
        HttpModule,
        CommonModule,
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
