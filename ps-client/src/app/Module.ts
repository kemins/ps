import { ApplicationRef, NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './AppRoutes';
import { App } from './AppComponent';
import { AppEffectService, CoreModule } from './core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppService } from './AppService';
import { NotificationsEffectService, NotificationsModule } from './notifications';
import { HMRModule } from './hmr';
import { Store, StoreModule } from '@ngrx/store';
import { FooterBarModule } from './footer-bar';
import { IAppStore } from './IAppState';
import { GuestBoardModule } from './guest-board';
import { UserBoardModule } from './user-board';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { SideBarEffectService } from './side-bar';
import { ContactEffectService } from './contact';
import { SlidesEffectService } from './slides';
import { AvatarEffectService, ProfileEffectService } from './profile';
import { SocialLoginEffectService } from './social-login';
import { NewAlbumEffectService } from './albums';

@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    CoreModule,
    NotificationsModule,
    GuestBoardModule,
    UserBoardModule,
    FooterBarModule,
    StoreModule.forRoot(AppService.appReducer, {
      initialState: AppService.defaultState
    }),
    StoreDevtoolsModule,
    EffectsModule.forRoot([
      AppEffectService,
      SideBarEffectService,
      ContactEffectService,
      NotificationsEffectService,
      SlidesEffectService,
      ProfileEffectService,
      NewAlbumEffectService,
      AvatarEffectService,
      SocialLoginEffectService
    ]),
    /*StoreDevtoolsModule.instrumentOnlyWithExtension()*/
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
