import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor() {}

  info = { phone: 'xxxxx', address: 'yyyyy', age: '18' };

  ngOnInit(): void {}


  onSubmit(f: NgForm) {
    console.log(f)
  }
}
