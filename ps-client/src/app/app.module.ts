import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { App } from './app.component';
import { CoreModule } from './core';
import { AlertModule } from 'ng2-bootstrap';
import { MdModule } from './md.module';
import { HomeModule } from './home';
import { ContactModule } from './contact';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SocialLoginModule } from './social-login';
import { AppState } from './app.service';
import { NotificationsModule } from './notifications';


@NgModule({
    bootstrap: [App],
    declarations: [App],
    imports: [
        MdModule.forRoot(),
        AlertModule,
        HttpModule,
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        CoreModule,
        NotificationsModule,
        SocialLoginModule,
        ContactModule,
        HomeModule,
        AppState.provideStore(),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [
        AppState,
        ConnectionBackend
    ]
})
export class AppModule {
    constructor() {}
}
