import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-scroll',
  templateUrl: './table-scroll.component.html',
  styleUrls: ['./table-scroll.component.css']
})


export class TableScrollComponent implements OnInit {

  //variable Declartion section

  q1 = [];
  q2 = [];
  q3 = [];
  q4 = [];
  q1Flag=true;
  q2Flag=false;
  q3Flag=false;
  q4Flag=false;
  yearlyFlag=false;
value;

  constructor() { }

  ngOnInit(): void {
    this.value='Q1'
    for(let i=1000;i<64000;i=i+i) {
      this.q1.push(i)
      console.log(this.q1);   
  }
  for(let i=1500;i<96000;i=i+i){
    this.q2.push(i)
    console.log(this.q2);
  }
  for(let i=2000;i<128000;i=i+i){
    this.q3.push(i)
    console.log(this.q3);
  }
  for(let i=2500;i<160000;i=i+i){
    this.q4.push(i)
    
  }
  console.log(this.q4);
  }


  onQ1Click(){
    this.q1Flag = true;
    this.q2Flag = false;
    this.q3Flag = false;
    this.q4Flag = false;
    console.log(this.q1Flag);
    this.value = 'Q1';
    this.yearlyFlag=false;
    
  }
  onQ2Click(){
    this.q1Flag = false;
    this.q2Flag = true;
    this.q3Flag = false;
    this.q4Flag = false;
    console.log(this.q2Flag);
    this.value = 'Q2';
    this.yearlyFlag=false;
  }
  onQ3Click(){
    this.q1Flag = false;
    this.q2Flag = false;
    this.q3Flag = true;
    this.q4Flag = false;
    console.log(this.q3Flag);
    this.value = 'Q3';
    this.yearlyFlag=false;
  }
  onQ4Click(){
    this.q1Flag = false;
    this.q2Flag = false;
    this.q3Flag = false;
    this.q4Flag = true;
    console.log(this.q4Flag);
    this.value = 'Q4';
    this.yearlyFlag=false;
  }

  onYearly(){
    this.yearlyFlag= true;
    this.q4Flag = false;
    this.q1Flag = false;
    this.q2Flag = false;
    this.q3Flag = false;
  }
  
  //this is for q2

//   onq(){
//     for(let i=0;i<36;i++) {
//   this.q1.push(i)
//   console.log(this.q1);
// }
// this.q1Flag=true;

// for( let i=0;i<36;i++){
// console.log(this.q1[i]);
// }


  

}
