import { AbstractControl, ValidationErrors, PatternValidator } from '@angular/forms';

export class AppHelperValidators {

    /*
        Validate South African ID
    */
   static checksanumber (control: AbstractControl): ValidationErrors | null {
    const enteredInput = control.value;
    var InputCheck = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
    return (!InputCheck.test(enteredInput) && enteredInput) ? { 'checksanumber': true } : null;
    }

}
