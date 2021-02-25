import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DataService } from '../services/http.service';



@Component({
  selector: 'app-form-resume',
  templateUrl: './form-resume.component.html',
  styleUrls: ['./form-resume.component.css']
})
export class FormResumeComponent implements OnInit {

  form!: FormGroup;

  constructor(private data: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(''),
      age: this.fb.control('')
    })
  }

onSubmit(data:any){
  this.data.addData(data);
  console.log('added');
}  

addNewData(data: any){
  this.data.addData(data);
}

}
