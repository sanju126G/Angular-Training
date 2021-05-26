import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, NgForm, FormArray } from '@angular/forms';

//this imports is for using reactive formArray

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  addDetailsForm;
  detailsArray;
  myGroup:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.myGroup = this.fb.group({
      person:this.fb.array([

      ])
      
    })
  }
  
  ngOnInit(): void {
    
  }

  persons(): FormArray {
        return this.addDetailsForm.get("person") as FormArray
      }
  

  newPerson(): FormGroup {

        return this.fb.group({
           name: '',
           mobileNo: '',
           email: '',
           place: '',
        })
    
   }

   addperson() {
        console.log("Adding a person");
        this.persons().push(this.newPerson());
  }

onFromSubmit(form:NgForm){

}
    
    
  

 
  // Worker= new Worker("");
  // empArray:any= [];

  // ngOnInit(): void {
  //   this.Worker= new Worker("");
  //   this.empArray.push(this.Worker)
  // }
  // // addDetailsForm;
  // addForm(){
  //   this.Worker= new Worker("")
  //   this.empArray.push(this.Worker);
  // }
  // remove(index: any){
  //   this.empArray.splice(index)
  // }
  

  // onFromSubmit(form:NgForm){

  // }

}


//Extra Trail Code

//this is creating a New Form Array
//  let  users = new FormArray([
  //     new FormControl('hey'),
  //     new FormControl('Good Morning')
  //   ]);
    //   console.log(users);
  //   console.log(users.value);

  //taken form Browser Example
   //  cityArray = new FormArray([new FormControl('SF'),new FormControl('hello')]);
  //   myGroup = new FormGroup({
  //     cities: this.cityArray
  //   });

  //
  // this.addDetailsForm = this.fb.group({
    //     'users' : new FormArray([
    //     new FormControl('Hey'),
    //     new FormControl('Good Morning')
    //   ])
    // })
    //
    //  detailsArray = new FormArray([new FormControl('name'),new FormControl('mobileNo'),new FormControl('emial'),new FormControl('place')]);
  //    myGroup = new FormGroup({
  //      details: this.detailsArray
  //    });
  