import { Directive, Input, SimpleChanges } from '@angular/core'
import { Validators, Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[emailValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true}]
})
export class EmailValidator implements Validator {
    validate(control: AbstractControl): {[key: string]: any} {
        return (control: AbstractControl): {[key: string]: any} => {
            const name = control.value;
            const no = new RegExp('Andriy').test(name);
            return no ? {'forbiddenName': {name}} : null;
        };
    }
}