import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-attribute-selector]',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.css']
})
export class AttributeSelectorComponent implements OnInit {
  public code: string;

  constructor() {
    this.code =
      `@Component({
      selector: '[app-attribute-selector]',
      templateUrl: './attribute-selector.component.html',
      styleUrls: ['./attribute-selector.component.css']
    })`;
  }

  ngOnInit() {
  }

}
