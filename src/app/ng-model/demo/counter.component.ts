import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true,
    },
  ],
})
export class CounterComponent implements ControlValueAccessor {
  _count: number = 0;

  get count() {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    this.propagateOnChange(this._count);
  }

  propagateOnChange: (value: any) => void = (_: any) => {};
  
  propagateOnTouched: (value: any) => void = (_: any) => {};


  writeValue(value: any) {
    if (value) {
      this.count = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateOnChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateOnTouched = fn;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
