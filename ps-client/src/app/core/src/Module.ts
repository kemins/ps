import { NgModule } from '@angular/core';
import { HttpService } from './HttpService';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [ HttpModule ],
    providers: [ HttpService ]
})

export class CoreModule {}