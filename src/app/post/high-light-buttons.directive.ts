import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighLightButtons]'
})
export class HighLightButtonsDirective {

  @HostListener('mouseenter')
  public onMouseEnter(event: any): void {
    this.el.nativeElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.6)';
  }
  @HostListener('mouseleave')
  public onMouseLeave(event: any): void {
    this.el.nativeElement.style.boxShadow = '0 0 10px rgba(0,0,0,0)';
  }
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = '200ms linear';
  }

}
