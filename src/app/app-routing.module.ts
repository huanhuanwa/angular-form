import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClassComponent } from './form-class/form-class.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ng-form',
    pathMatch: 'full',
  },
  {
    path: 'ng-form',
    component: NgFormComponent,
  },
  {
    path: 'form-class',
    component: FormClassComponent,
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'ng-model',
    component: NgModelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
