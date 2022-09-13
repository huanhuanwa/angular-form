import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UniqueAlterEgoValidator } from '../validator/async-valitor';
import { forbiddenNameValidator } from '../validator/forbidden-name.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('');
  age = new FormControl('');

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(
      'name',
      [
        // Validators.required,
        // Validators.minLength(4),
        forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
      ],
      this.alterEgoValidator.validate.bind(
        this.alterEgoValidator)
      // {
      //   validators: [Validators.required],
      //   asyncValidators: this.alterEgoValidator.validate.bind(
      //     this.alterEgoValidator
      //   ),
      //   updateOn: 'blur',
      // }
    ),
    phone: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }),
  });

  builderForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: '',
    address: this.fb.group({
      street: '',
      city: '',
    }),
  });

  // 表单
  activeForm: FormGroup = new FormGroup({
    contacts: new FormArray([]),
  });

  get actives() {
    return this.activeForm.get('contacts') as FormArray;
  }

  get contactFormName(): AbstractControl<string> {
    return this.contactForm.get('name') as AbstractControl<string>;
  }

  constructor(
    public fb: FormBuilder,
    private alterEgoValidator: UniqueAlterEgoValidator
  ) {}

  ngOnInit(): void {
    this.name.valueChanges.subscribe((data) => {
      console.log('value', data);
    });

    // 添加默认的联系方式
    this.addContact();
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  updateConcat() {
    this.contactForm.setValue({
      name: 'Mike',
      phone: '777',
    });
  }

  patchConcat() {
    this.contactForm.patchValue({
      name: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  onSubmit() {
    // console.log(this.contactForm);
    // console.log(this.builderForm);
    console.log(this.activeForm);
  }

  // 添加联系方式
  addContact() {
    // 联系方式
    const myContact: FormGroup = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
    });
    // 向联系方式数组中添加联系方式
    this.actives.push(myContact);
  }

  // 删除联系方式
  removeContact(i: number) {
    this.actives.removeAt(i);
  }
}
