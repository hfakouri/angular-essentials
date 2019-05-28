import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover2]'
})
export class Hover2Directive {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor() { }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
