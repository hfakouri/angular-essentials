import { Component, OnInit, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit, AfterContentInit {
  @ContentChild('myref', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log('--------------- content-child component -------------------');
    console.log('ngAfterContentInit');
    console.log(this.paragraph.nativeElement.innerText);
    console.log('------------ End of content-child component ---------------');
  }
}
