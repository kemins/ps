import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[emailValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true}]
})

export class EmailValidator implements Validator {
    static email(control: AbstractControl): {[key: string]: any} {
        const name = control.value;
        const valid = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(name);
        return valid ? null : {emailInvalid: {name}};
    }

    validate(control: AbstractControl): {[key: string]: any} {
        return EmailValidator.email(control);
    }
}