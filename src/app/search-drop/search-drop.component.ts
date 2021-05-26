import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,FormArray} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DetailsService } from '../details.service';

import { FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-search-drop',
  templateUrl: './search-drop.component.html',
  styleUrls: ['./search-drop.component.css']
})

export class SearchDropComponent implements OnInit {

  result;

  value;
  name:string;
  mobileNo:number;
  email:string;
  place:string;

  detailsForm:FormGroup;
  detailsArray:FormArray;

   empForm:FormGroup;

  constructor(public data:DetailsService,private fb:FormBuilder) {

    this.empForm=this.fb.group({
            employees: this.fb.array([]) ,
          })
  }

  
//Filter Pipe Declarations
  myControl = new FormControl();
  options: any=['sanjay',"satheesh"];
  filteredOptions: Observable<string[]>;

  details:any;

  //NgOnInit block
  ngOnInit() {

    this.data.getDetails().subscribe(res => {
      this.details = res;
      console.log(res);
      
    })

    this.data.getOptions().subscribe(res => {
      this.options = this.details.name;
      console.log(res);
      console.log(this.options);
      
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
   }
   //End Of NgOninit

   private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }



   //this is FormArray block
   employees(): FormArray {
        return this.empForm.get("employees") as FormArray
      }

     newEmployee(): FormGroup {

        return this.fb.group({
           name: '',
           mobileNo: '',
           email: '',
           place: '',
        })
    
   }

    addEmployee() {
          console.log("Adding a employee");
          this.employees().push(this.newEmployee());
    }

  remove(index){
    this.employees().removeAt(index);
  }

  onsubmit(form) {
        console.log(form);
    console.log(form.value);
    
        const formData = form.value;
        console.log(formData);
        
        this.data.addDetails(formData).subscribe(res =>{
          this.details = res;
          console.log(this.details);
          
        })
      }  

    
   // --------------------------------------------------------------------------------------------



  
  //---------------------------------------------
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

}

  //---------------------------------------------

  // addNewDetails(newName,NewMobileNo,NewEmail,NewPlace){
  //   const newFromData = {name:newName,mobileNo:NewMobileNo,emial:NewEmail,place:NewPlace};
  //   console.log(newFromData);
    
  //   this.data.addDetail(newFromData).subscribe(data => {
  //     console.log(data);
      
  //   })
  // }


// sanjay ={
  //   name:'sanjay',
  //   mobileNo:1234667890,
  //   email:'sanjay@gmail.com',
  //   place:'mandya'
  // };
  // satheesh ={
  //   name:'satheesh',
  //   mobileNo:1234667891,
  //   email:'satheesh@gmail.com',
  //   place:'NorthKarnataka'
  // };
  // abbas ={
  //   name:'abbas',
  //   mobileNo:1234667892,
  //   email:'abbas@gmail.com',
  //   place:'Hubli'
  // };
  // dharini ={
  //   name:'dharini',
  //   mobileNo:1234667893,
  //   email:'dharini@gmail.com',
  //   place:'bangalore'
  // };
