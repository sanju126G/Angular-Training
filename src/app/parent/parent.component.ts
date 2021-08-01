import { Component, OnInit, QueryList, ViewChild, ViewChildren,ContentChild,ContentChildren, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Counter = 5;

  @ContentChild(ChildComponent) contChildRef:ChildComponent;

  // @ContentChildren(ChildComponent) contChildrenRef:ChildComponent;

  @ViewChild(ChildComponent) viewChildRef:ChildComponent;

  // @ViewChildren(ChildComponent) viewChildrenRef:QueryList<ChildComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }

  delete = true;
  onDelete(){
    this.delete = !this.delete;
  }

  ngAfterContentInit(){
    console.log(' this is ngAfterContentInit from Child Component ');

    // console.log(this.contChildRef.today); 
    // setInterval(() => {
    //   this.contChildRef.today = new Date();
    // },2000)   
    
  }

  ngAfterContentChecked(){
    console.log(' this is ngAfterContentChecked from Child Component ');
  }

  ngAfterViewInit(){
  //   console.log(' this is ngAfterViewInit from Parent Class ');

  //   //child
    console.log(this.viewChildRef.today);
    setInterval(() => {
          this.viewChildRef.today = new Date();
        },60000)


  //   // children
  //   // console.log(this.childRef.toArray());
  //   // this.childRef.toArray().forEach(element => {
  //   //   setInterval(() => {
  //   //     element.today = new Date();
  //   //   },1000)
  //   // });
  }

  // ngAfterViewChecked(){
  //     console.log(' this is ngAfterViewChecked from Parent Component ');
     
  //     // for ViewChild
  //   // console.log(this.viewChildRef.today);
  //   // setInterval(() => {
  //   //       this.viewChildRef.today = new Date();
  //   //     },60000)
  //   }

}
