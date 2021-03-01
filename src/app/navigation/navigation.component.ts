import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('sidenav') public sidenav!: MatSidenav;
  
  
  constructor(public nav: NavService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void{
    this.nav.setSideNav(this.sidenav);
  }

 
}
