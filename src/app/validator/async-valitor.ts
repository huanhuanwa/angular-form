import { Inject, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map, catchError, of } from 'rxjs';

export class HeroesService {
  isAlterEgoTaken: (alterEgo: string) => Observable<boolean> = (
    alterEgo: string
  ) => {
    if (alterEgo != 'admin') {
      return of(false);
    }
    return of(true);
  };
}

@Injectable({ providedIn: 'root' })
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(public heroesService: HeroesService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control.value === 'admin') {
      return of({ uniqueAlterEgo: true });
    }
    return of(null);
  }
}
