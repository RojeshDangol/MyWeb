import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Materials } from '../modules/material.module'
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavListComponent } from './nav-list/nav-list.component';


@NgModule({
  declarations: [NavListComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    Materials
  ]
})
export class NavigationModule { }
