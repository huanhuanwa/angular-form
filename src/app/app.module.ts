import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { FormClassComponent } from './form-class/form-class.component';
import { ForbiddenValidatorDirective } from './validator/forbidden-name.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UniqueAlterEgoValidatorDirective } from './validator/async-valitor.directive';
import { HeroesService } from './validator/async-valitor';
import { NgModelComponent } from './ng-model/ng-model.component';
import { CounterComponent } from './ng-model/demo/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    NgFormComponent,
    FormClassComponent,
    ForbiddenValidatorDirective,
    ReactiveFormComponent,
    UniqueAlterEgoValidatorDirective,
    NgModelComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
