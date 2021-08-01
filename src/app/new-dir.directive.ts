import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewDir]'
})
export class NewDirDirective {

  constructor(private ref:ElementRef) { 
    ref.nativeElement.style.color="white";
  }

}
