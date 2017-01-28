import { NgModule, ApplicationRef } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { App } from './app.component';
import { CoreModule } from './core';
import { AlertModule } from 'ng2-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications';
import { HMRModule } from './hmr';
import { Store } from '@ngrx/store';
import { FooterBarModule } from './footer-bar';
import { AppStore } from './app.state';
import { GuestBoardModule } from './guest-board';
import { UserBoardModule } from './user-board';

@NgModule({
    bootstrap: [App],
    declarations: [App],
    imports: [
        MaterialModule.forRoot(),
        AlertModule.forRoot(),
        HttpModule,
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        CoreModule,
        NotificationsModule,
        GuestBoardModule,
        UserBoardModule,
        FooterBarModule,
        AppService.provideStore(),
        StoreDevtoolsModule,
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [
        AppService
    ]
})
export class AppModule extends HMRModule {
    constructor(appRef: ApplicationRef, appStore: Store<AppStore>) {
        super(appRef, appStore);
    }
}
