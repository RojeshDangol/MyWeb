import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Materials } from '../modules/material.module'
import { NavigationRoutingModule } from './navigation-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    Materials
  ]
})
export class NavigationModule { }
