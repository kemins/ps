import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmailValidator } from './EmailValidator';

@NgModule({
    imports:      [ FormsModule ],
    declarations: [ EmailValidator ],
    exports:      [ EmailValidator ]
})
export class ValidatorModule {}
