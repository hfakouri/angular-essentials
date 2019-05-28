import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover3]'
})
export class Hover3Directive implements OnInit {
  @Input() defaultColor: string;
  @Input('appHover3') highlightColor: string;

  @Input() defaultFontSize: string;
  @Input() fontSize: string;

  @Input() defaultFontWeight: string;
  @Input() fontWeight: string;

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @HostBinding('style.fontSize') textFontSize: string;
  @HostBinding('style.fontWeight') textFontWeight: string;

  constructor() { }

  ngOnInit() {
    this.defaultColor = 'transparent';
    this.defaultFontSize = '16px';
    this.defaultFontWeight = 'normal';
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.textFontSize = this.fontSize;
    this.textFontWeight = this.fontWeight;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.textFontSize = this.defaultFontSize;
    this.textFontWeight = this.defaultFontWeight;
  }
}
