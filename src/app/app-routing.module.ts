import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: ()=>import('./form-resume/form-resume.module').then(m=>m.FormResumeModule)
  },
  {
    path: 'display',
    loadChildren: ()=>import('./display-resume/display-resume.module').then(m=>m.DisplayResumeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
