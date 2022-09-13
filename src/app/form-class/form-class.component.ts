import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormRecord,
  FormBuilder,
} from '@angular/forms';

interface LoginForm {
  email: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.scss'],
})
export class FormClassComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.creatFormControl();
    // this.creatFromGroup();
    this.creatFormRecord();
    // this.creatFormArray();
  }

  creatFormControl() {
    const control = new FormControl('some value');
    console.log(control, control.value);
  }

  creatFormRecord() {
    const control = new FormRecord({
      email: new FormControl(true, { nonNullable: true }),
      password: new FormControl(false, { nonNullable: true }),
    });
    console.log(control, control.value);
    control.addControl('videos', new FormControl(false, { nonNullable: true }));
    control.removeControl('videos')
    // 编译错误，因为控件具有不同的类型
    // control.addControl('books', new FormControl('Some string', { nonNullable: true }));

    const group = new FormGroup<LoginForm>({
      email: new FormControl('', { nonNullable: true }),
      password: new FormControl('', { nonNullable: true }),
    });
    // group.addControl('videos', new FormControl('', { nonNullable: true }));
    // group.removeControl('password') // password 为可选类型，可以移除
    //  编译错误，不能在运行中添加或删除由 FormGroup 创建的不可选表单控件
    // group.addControl('videos', new FormControl(false, { nonNullable: true }))
  }

  creatFromGroup() {
    const form = new FormGroup({
      first: new FormControl('first name'),
      last: new FormControl('last name'),
    });

    console.log(form, form.value); // {first: 'first name', last: 'last name'}
    form.reset({ first: 'name', last: 'last name' });
    console.log(form.value); // {first: 'name', last: 'last name'}
  }

  creatFormArray() {
    const arr = new FormArray([
      new FormControl('nww', Validators.minLength(2)),
      new FormControl('age'),
    ]);

    console.log(arr, arr.value); // ['name', 'age']
    console.log(arr.status); // 'VALID'
  }
}
