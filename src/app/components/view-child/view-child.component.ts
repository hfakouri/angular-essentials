import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('myInput', { static: true }) myData: ElementRef;
  anotherVariable: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.anotherVariable = this.myData.nativeElement.value;
  }
}
