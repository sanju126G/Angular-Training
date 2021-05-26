import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get('http://localhost:3000/details')
  }

  getOptions(){
    return this.http.get('http://localhost:3000/options')
  }

  addDetails(details:Details){
    return this.http.post('http://localhost:3000/details',details)
  }

}
