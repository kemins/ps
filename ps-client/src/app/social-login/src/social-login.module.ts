import { NgModule } from '@angular/core';
import { CoreModule } from '../../core';
import { SocialLoginDataService } from './social-login-data.service';
import { SocialLoginEffectService } from './social-login-effect.service';

@NgModule({
    declarations: [],
    imports: [
        CoreModule
    ],
    providers: [
        SocialLoginDataService,
        SocialLoginEffectService
    ]
})
export class SocialLoginModule {
    constructor() {}
}
