import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormResumeComponent } from './form-resume/form-resume.component';
import { DisplayResumeComponent } from './display-resume/display-resume.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { Materials } from './modules/material.module';

import { NavListComponent } from './navigation/nav-list/nav-list.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormResumeComponent,
    DisplayResumeComponent,
    HomeComponent,
    GamesComponent,
    NavListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Materials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
