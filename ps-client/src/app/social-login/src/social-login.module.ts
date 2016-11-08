import { NgModule } from '@angular/core';
import { CoreModule } from '../../core';
import { SocialLoginDataService } from './social-login-data.service';
import { SocialLoginEffectService } from './social-login-effect.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [],
    imports: [
        CoreModule,
        EffectsModule.runAfterBootstrap(SocialLoginEffectService)
    ],
    providers: [
        SocialLoginDataService,
        SocialLoginEffectService
    ]
})
export class SocialLoginModule {
    constructor() {}
}
