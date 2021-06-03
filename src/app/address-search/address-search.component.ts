import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css']
})
export class AddressSearchComponent implements OnInit {

  constructor(private ds:AddressService, public platform:Platform) { }

  postalInfo:any = [];
  nearByPlaces:any = [];
  postal:any=[]
  pCode = 571430;
  selectedCode;
  //this is for Material input
  value = 'Clear me';

  //this is From aced mind
  latitude = 12.8318;
  longitude = 76.5303;
  locationChosen = true;
  error;

  ngOnInit(): void {
    
    this.onSearch(); 
    this.ds.getResturents().subscribe((res) => {
      this.nearByPlaces = res;
      console.log(res); 
    },
    // err => {
      // this.error = "Server busy"
      // console.log(this.error);
      
    // }
    )
  }

  

  onSearch(){
    this.ds.getPostal(this.pCode).subscribe(res => {

      // console.log('this is responce from API ', res);

      this.postalInfo=res
      // console.log('postalInfo After Updation ', this.postalInfo);
      
      this.postal=this.postalInfo.result
      // console.log('this is after object de-Structuring ', this.postal);
    },err => {
      this.error = "pin code not found"
      console.log(this.error);
      
    })
  }

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  onClick(code,lat,long){
    // console.log(lat,long);
    if(isNaN(this.longitude && this.latitude)){
    this.latitude = lat;
    this.longitude = long;
    this.selectedCode = code;
    this.locationChosen = true;
    // console.log(this.latitude,this.longitude);
  } else {
    // console.log('lat and long are not numbers');
    // console.log('converting string to numbers');
    this.latitude = parseFloat(lat);
    this.longitude = parseFloat(long);
    // console.log('after converting to numbers',this.latitude,this.longitude);
        
  }
  }

}
