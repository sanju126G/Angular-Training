import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public ref:ElementRef) { 
    ref.nativeElement.style.color="white";
    ref.nativeElement.style.backgroundColor="black";
    ref.nativeElement.style.textAlign="center";
    
  }

  

}
