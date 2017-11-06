import { NgModule, ApplicationRef } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './AppRoutes';
import { App } from './AppComponent';
import { CoreModule, AppEffectService } from './core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppService } from './AppService';
import { NotificationsModule } from './notifications';
import { HMRModule } from './hmr';
import { Store } from '@ngrx/store';
import { FooterBarModule } from './footer-bar';
import { IAppStore } from './IAppState';
import { GuestBoardModule } from './guest-board';
import { UserBoardModule } from './user-board';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { SideBarEffectService } from './side-bar';
import { ContactEffectService } from './contact';
import { NotificationsEffectService } from './notifications';
import { SlidesEffectService } from './slides';
import { ProfileEffectService, AvatarEffectService } from './profile';
import { SocialLoginEffectService } from './social-login';
import { NewAlbumEffectService } from './albums';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [
    MaterialModule.forRoot(),
    AlertModule.forRoot(),
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
    EffectsModule.run(NewAlbumEffectService),
    EffectsModule.run(AvatarEffectService),
    EffectsModule.run(SocialLoginEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    AppService
  ]
})
export class AppModule extends HMRModule {
  constructor(appRef: ApplicationRef, appStore: Store<IAppStore>) {
    super(appRef, appStore);
  }
}
