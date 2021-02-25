import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { iData } from './data-interface';
import { Identifiers } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})



export class DataService{
    constructor(private http: HttpClient) {};

baseUrl:string= 'http://localhost:3000/data/';

getData(): Observable<iData[]>{
    return this.http.get<iData[]>(this.baseUrl);
}

addData(data:any){
    this.http.post<iData[]>( this.baseUrl, data).subscribe(m=>console.log('m'));
}

deleteData(id:number){
    this.http.delete<iData[]>(`${this.baseUrl}/${id}`).subscribe(response=> console.log(response));

    this.getData();
    
}

updateData(id: number, data: any){
    this.http.put<iData[]>(`${this.baseUrl}/${id}`, data).subscribe(m=>console.log('updated'));
}


}