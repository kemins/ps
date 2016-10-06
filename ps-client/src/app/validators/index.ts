import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { EmailValidator } from './email-validator.directive';

@NgModule({
    imports:      [ FormsModule ],
    declarations: [ EmailValidator ],
    exports:      [ EmailValidator ],
})

export class ValidatorModule {}
