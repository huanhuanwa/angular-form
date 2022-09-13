import { Directive, forwardRef } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[appUniqueAlterEgo]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueAlterEgoValidatorDirective),
      multi: true,
    },
  ],
})
export class UniqueAlterEgoValidatorDirective implements AsyncValidator {
  constructor() {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control.value === 'admin') {
      return of({ uniqueAlterEgo: true });
    }
    return of(null);
  }
}
