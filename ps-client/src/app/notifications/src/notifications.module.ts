import { NgModule } from '@angular/core';
import { CoreModule } from '../../core';
import { NotificationTypePipe } from './notifications.pipes';
import { NotificationsEffectService } from './notifications-effect.service';


@NgModule({
    declarations: [
        NotificationTypePipe
    ],
    imports: [
      CoreModule
    ],
    exports: [NotificationTypePipe],
    providers: [
        NotificationsEffectService
    ]
})
export class NotificationsModule {
    constructor() {}
}
