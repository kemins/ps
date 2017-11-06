import { NgModule } from '@angular/core';
import { CoreModule } from '../../core';
import { SocialLoginDataService } from './SocialLoginDataService';

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
  public constructor() {
  }
}
