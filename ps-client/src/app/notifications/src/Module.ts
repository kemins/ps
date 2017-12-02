import { NgModule } from '@angular/core';
import { CoreModule } from '../../core';
import { NotificationTypePipe } from './NotificatioTypePipe';
import { NotificationsEffectService } from './notifications-effect.service';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    NotificationTypePipe
  ],
  imports: [
    CoreModule,
    MatSnackBarModule
  ],
  exports: [NotificationTypePipe],
  providers: [
    NotificationsEffectService
  ]
})
export class NotificationsModule {
  public constructor() {
  }
}
