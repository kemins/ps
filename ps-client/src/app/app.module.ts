import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { App } from './app.component';
import { CoreModule, PsHttp } from './core';
import { AlertModule } from 'ng2-bootstrap';
import { MdModule } from './md.module';
import { Home } from './home';
import {
    contact,
    contactToken,
    ContactEffectService,
    ContactModule
} from './contact';
import { Carousel } from './carousel/carousel.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CarouselComponent, SlideComponent } from 'ng2-bootstrap';
import { SocialLoginEffectService, SocialLoginModule } from './social-login';
import { AppState } from './app.service';
import { defaultState } from './app.state';
import {
    notifications,
    NotificationsEffectService,
    NotificationsModule
} from './notifications';
import {
    SlideDataService,
    slides,
    SlidesEffectService,
    SlidesModule
} from './slides';


// Application wide providers
const APP_PROVIDERS = [
    AppState,
    PsHttp,
    SlideDataService,
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [App],
    declarations: [
        App,
        Home,
        CarouselComponent,
        SlideComponent,
        Carousel
    ],
    imports: [
        MdModule.forRoot(),
        AlertModule,
        HttpModule,
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        CoreModule,
        NotificationsModule,
        SocialLoginModule,
        SlidesModule,
        ContactModule,
        StoreModule.provideStore({
            slides: slides,
            notifications: notifications,
            contact: combineReducers({
                value: contact,
                token: contactToken
            })
        }, defaultState),
        EffectsModule.runAfterBootstrap(SlidesEffectService),
        EffectsModule.runAfterBootstrap(ContactEffectService),
        EffectsModule.runAfterBootstrap(NotificationsEffectService),
        EffectsModule.runAfterBootstrap(SocialLoginEffectService),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS,
        ConnectionBackend
    ]
})
export class AppModule {
    constructor() {}
}
