import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/http.service';

@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.css']
})
export class DisplayResumeComponent implements OnInit {

  constructor(private ds: DataService) { }

  newData: any= [];

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.ds.getData().subscribe((newD: any)=> this.newData = newD);
    console.log('new data:', this.newData);
  }

  delete(id:any){
    id = id+1;
    this.ds.deleteData(id);
    console.log('deleted', id);
    this.getData();
  }

  update(id: any, data: any){
    id = id+1;
    this.ds.updateData(id, data);
  }


 

}
