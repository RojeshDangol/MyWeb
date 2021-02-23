import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormResumeComponent } from './form-resume/form-resume.component';
import { DisplayResumeComponent } from './display-resume/display-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormResumeComponent,
    DisplayResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
