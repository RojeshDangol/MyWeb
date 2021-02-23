import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayResumeComponent } from './display-resume.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayResumeRoutingModule { }
