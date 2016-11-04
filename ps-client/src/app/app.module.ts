import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { OneAllAPI } from './social-login/oneall.ts';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

// modules
import { App } from './app.component';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { ValidatorModule } from './validators';
import { CoreModule } from './core';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MdModule } from './md.module';


import { Home } from './home';
import { ContactComponent } from './contact';
import { Carousel } from './carousel/carousel.component';

import { PsHttp } from "./core/ps-http.service";


import './profile/index.tsx';

// rx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { combineReducers } from '@ngrx/store';


// bootstrap components
import { CarouselComponent, SlideComponent } from 'ng2-bootstrap';

// data services
import { SlideDataService } from './slides/slides-data.service';
import { ContactDataService } from './contact/contact-data.service';

// regular services
import { AppState } from './app.service';

// vo
import { Contact } from "./contact/contact";

// reducers
import { slides } from './slides/slides.reducer';
import { contact } from './contact/contact.reducer';
import { contactToken } from './contact/contact-token.reducer';
import { notifications } from './notifications/notifications.reducer';

// effects
import { ContactEffectService } from './contact/contact-effect.service';
import { SlidesEffectService}  from './slides/slides-effect.service';
import { NotificationsEffectService } from "./notifications/notifications-effect.service";

// pipes
import { NotificationTypePipe } from './notifications/notifications.pipes';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState,
    PsHttp,
    SlideDataService,
    ContactDataService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [App],
    declarations: [
        App,
        ContactComponent,
        Home,
        CarouselComponent,
        SlideComponent,
        Carousel,
        NotificationTypePipe
    ],
    imports: [
        MdModule.forRoot(),
        AlertModule,
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        ReCaptchaModule,
        ValidatorModule,
        CoreModule,
        StoreModule.provideStore({
            slides: slides,
            notifications: notifications,
            contact: combineReducers({
                value: contact,
                token: contactToken
            })
        }, {
            slides: [],
            notifications: [],
            contact: {
                value: new Contact('Andrew', 'Test', 'andriy.kemin@gmail.com'),
                token: 'test2'
            }
        }),
        EffectsModule.runAfterBootstrap(SlidesEffectService),
        EffectsModule.runAfterBootstrap(ContactEffectService),
        EffectsModule.runAfterBootstrap(NotificationsEffectService)
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS,
        ConnectionBackend
    ]
})
export class AppModule {
    constructor() {}
}

OneAllAPI
    .getInstance()
    .bootstrap()
    .showLoginWidget();