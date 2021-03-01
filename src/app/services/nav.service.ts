
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root'
})

export class NavService {

    private sidenav!: MatSidenav;
    
  public setSideNav (sidenav: MatSidenav){
      this.sidenav = sidenav;
  }

 public toggle(): void {
       this.sidenav.toggle();
 }
}