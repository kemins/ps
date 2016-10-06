import { NgModule } from '@angular/core';

import { PsHttp } from "./ps-http.service";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [ HttpModule ],
    providers: [ PsHttp ]
})

export class CoreModule {}
