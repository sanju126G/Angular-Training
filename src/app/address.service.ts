import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  getPostal(pCode){
    return this.http.get(`${environment.postalUrl}${pCode}`)
  }
  getResturents(){
    return this.http.get(`${environment.nearByUrl}`)
  }

}
