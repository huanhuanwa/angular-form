import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent implements OnInit {
  name: string = '';

  count: number = 0;

  setValue() {
    this.name = 'Nancy';
  }

  concatForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.concatForm = this.fb.group({
      counter: 5, // 设置初始值
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false

  }


  concatFormSubmit(){
    console.log(this.concatForm )
  }



  valueChange(value: number, data: any){
    console.log('value:', value, data)
  }
}
