import { Component, OnInit } from '@angular/core';
// import { resolve } from 'dns';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onclick(){

    //ForEach Loop; Only Used To Iterate Arrays; does not work with Objects;
    // let array = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    // array.forEach(function(day,index) {
    //   console.log(index+1,day);
    // })

    //forOf Loop; works with array; and not with objects;
  //   let array = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  //   for(let day of array){
  //     console.log(day);
  //   }
  

  // forIn loop; works with objects;
    var object = {
      name:'sanju',
      age:21,
      place:'mandya'
    }
    for(let detail in object){
      console.log( object[detail]);
      
    }

    //types of functions in javascript
    //there are four types of function in javascript
    // 1. Named Function
    // syntax for the above Function is Function(key-word) function-Name (arguments){ statements }

    // 2. Anonymous Function
    // syntax for the above Function is var Car = Function(key-word) (arguments){ statements }

    // 3. IIFE Function
    // syntax for the above Function is (Function(key-word) (arguments){ statements })(); ()();
    // (function() {
    //   console.log('Hello I am IIFE function Writing this message Without A calling Function');
      
    // })();

    // 4. Arrow Function
    // syntax for the above Function is  ((arguments)) => { statements }

    //Array Methods

    //example-1
    // let array = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    // let arrayOfObjects = [ {name:'sanju',age:21},{name:'sachi',age:22},{name:'manu',age:24},{name:'Praveen',age:24}]
    // let result = arrayOfObjects.filter((items) => {
    //   return items.age == 24;
    // })
    // console.log(result);
    
    //example-1
    
    // let array = [1,2,3,4,5,6,7,8,9,10]
    // let result2 = array.filter((items) => {
    //   return items >= 5
    // })
    // console.log(result2);


    //includes(searchElement, From Index)
    // let array = [1,2,3,4,5,6,7,8,9,10];
    // let result = array.includes(11,2);
    // console.log(result);

    //Call Back Function
  
    // function one(two){
    //   console.log('this message is from function one');
    //   return two();
      
    // }
    
    // function two(){
    //   console.log('this Message is from function two');
      
    // }
    // one(two);


    //Promise in javaScript

    let p = new Promise((resolve,reject) => {
      let a = 5;
      if(a < 3 ){
        resolve(' a is less than 3 ')
      }else {
        reject(' a is greater than 3')
      }
    })

    p.then((message) => {
      console.log('this message is from then' + message);
      
    }).catch((message) => {
      console.log('this msg is from catch' + message);
      
    })
    
    

}
//Testing the IIFE Function Outside The Declared Funtion.
//   a =(function() {
//   console.log('Hello I am IIFE function Writing this message Without A calling Function');
// })();




}
