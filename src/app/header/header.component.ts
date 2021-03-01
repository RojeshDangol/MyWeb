import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(public nav: NavService) { }

  ngOnInit(): void {
  }

  toggleActive:boolean = false;

  toggleNav(){
    this.toggleActive = !this.toggleActive;
    this.nav.toggle();
    console.log('clicked');
  }

}
