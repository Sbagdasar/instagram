import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appButtonsColor]'
})
export class ButtonsColorDirective {
@Input()
set isLiked(isLiked: boolean){
  if (isLiked){
    this.el.nativeElement.style.backgroundPosition = '-362px -402px';
  }else{
    this.el.nativeElement.style.backgroundPosition = '-406px 0';
  }
}
  @Input()
  set isSaved(isSaved: boolean){
    if (isSaved){
      this.el.nativeElement.style.backgroundPosition = '-66px -427px';
    }else{
      this.el.nativeElement.style.backgroundPosition = '-133px -427px';
    }
  }
  @Input()
  set color(color: string){
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = '10ms linear';
  }

}
