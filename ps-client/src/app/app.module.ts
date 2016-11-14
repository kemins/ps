import { NgModule, ApplicationRef } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { App } from './app.component';
import { CoreModule } from './core';
import { AlertModule } from 'ng2-bootstrap';
import { HomeModule } from './home';
import { ContactModule } from './contact';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SocialLoginModule } from './social-login';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications';
import { HMRModule } from './hmr';
import { Store } from '@ngrx/store';
import { FooterBarModule } from './footer-bar';

@NgModule({
    bootstrap: [App],
    declarations: [App],
    imports: [
        MaterialModule.forRoot(),
        AlertModule,
        HttpModule,
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        CoreModule,
        NotificationsModule,
        SocialLoginModule,
        ContactModule,
        HomeModule,
        FooterBarModule,
        AppService.provideStore(),
        StoreDevtoolsModule,
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [
        AppService,
        ConnectionBackend
    ]
})
export class AppModule extends HMRModule{
    constructor(appRef: ApplicationRef, appStore: Store) {
        super.constructor(appRef, appStore);
    }
}
