import { NgModule, ApplicationRef } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { App } from './app.component';
import { CoreModule } from './core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications';
import { HMRModule } from './hmr';
import { Store } from '@ngrx/store';
import { FooterBarModule } from './footer-bar';
import { AppStore } from './app.state';
import { GuestBoardModule } from './guest-board';
import { UserBoardModule } from './user-board';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { SideBarEffectService } from './side-bar/src/side-bar-effect.service';
import { ContactEffectService } from './contact/src/contact-effect.service';
import { NotificationsEffectService } from './notifications/src/notifications-effect.service';
import { SlidesEffectService } from './slides/src/slides-effect.service';
import { ProfileEffectService } from './profile/src/profile-effect.service';
import { SocialLoginEffectService } from './social-login/src/social-login-effect.service';
import { AppEffectService } from './core/src/app-effext.service';
import { AvatarEffectService } from './profile/src/avatar-effect.service';

@NgModule({
    bootstrap: [App],
    declarations: [App],
    imports: [
        MaterialModule.forRoot(),
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        CoreModule,
        NotificationsModule,
        GuestBoardModule,
        UserBoardModule,
        FooterBarModule,
        AppService.provideStore(),
        StoreDevtoolsModule,
        EffectsModule.runAfterBootstrap(AppEffectService),
        EffectsModule.run(SideBarEffectService),
        EffectsModule.run(ContactEffectService),
        EffectsModule.run(NotificationsEffectService),
        EffectsModule.run(SlidesEffectService),
        EffectsModule.run(ProfileEffectService),
        EffectsModule.run(AvatarEffectService),
        EffectsModule.run(SocialLoginEffectService),
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
