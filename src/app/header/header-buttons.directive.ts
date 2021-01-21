import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHeaderButtons]'
})
export class HeaderButtonsDirective {
  @Input()
  set likeClicked(likeClicked: boolean){
    if (likeClicked){
      this.el.nativeElement.style.backgroundPosition = '-340px -403px';
    }else{
      this.el.nativeElement.style.backgroundPosition = '-406px 0';
    }
  }
  @Input()
  set homeClicked(homeClicked: boolean){
    if (homeClicked){
      this.el.nativeElement.style.backgroundPosition = '-406px -23px';
    }else{
      this.el.nativeElement.style.backgroundPosition = '-406px -48px';
    }
  }
  @Input()
  set profileClicked(profileClicked: boolean){
    if (!profileClicked){
      this.el.nativeElement.style.backgroundPosition = '-384px -427px';
    }else{
      this.el.nativeElement.style.backgroundPosition = '-363px -427px';
    }
  }
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = '10ms linear';
  }


}
