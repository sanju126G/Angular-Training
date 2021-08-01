import { Component,Input, OnInit, OnChanges, SimpleChanges, DoCheck, Output, ViewChild, ContentChild, ContentChildren  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() count: number;
  // @Output();
  // @ViewChild();
  // @ViewChildren();
  // @ContentChild();
  // @ContentChildren();
  today:Date = new Date();

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
 
    console.log(' this is ngOnChanges from Child Component');
    console.log(changes);
    

    for (let property in changes) {
        if (property === 'count') {
          console.log('Previous:', changes[property].previousValue);
          console.log('Current:', changes[property].currentValue);
          console.log('firstChange:', changes[property].firstChange);
        } 
    }
  }

  ngOnInit(): void {
    console.log(' this is ngOnInit from Child Component');
  }

  ngDoCheck() {
    console.log(' this is Docheck from Child Component ');
  }

  ngAfterContentInit(){
    console.log(' this is ngAfterContentInit from Child Component ');
  }

  ngAfterContentChecked(){
    console.log(' this is ngAfterContentChecked from Child Component ');
  }

  // ngAfterViewInit(){
  //   console.log(' this is ngAfterViewInit from Child Component ');
  // }

  // ngAfterViewChecked(){
  //   console.log(' this is ngAfterViewChecked from Child Component ');
  // }

  // ngOnDestroy(){
  //   console.log(' this is ngOnDestroy from Child Component ');
  // }

  // ngOnChanges
  // ngOnInit
  // ngDoCheck
  // ngAfterContentInit
  // ngAfterContentChecked
  // ngAfterViewInit
  // ngAfterViewChecked
  // ngOnDestroy


}
