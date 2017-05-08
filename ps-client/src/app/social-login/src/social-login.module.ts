import { NgModule } from '@angular/core';
import { CoreModule } from '../../core';
import { SocialLoginDataService } from './social-login-data.service';

@NgModule({
    declarations: [],
    imports: [
        CoreModule
    ],
    providers: [
        SocialLoginDataService
    ]
})
export class SocialLoginModule {
    constructor() {}
}
