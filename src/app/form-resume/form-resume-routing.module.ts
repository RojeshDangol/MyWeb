import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormResumeComponent } from './form-resume.component';

const routes: Routes = [
  {
    path: '',
    component: FormResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormResumeRoutingModule { }
