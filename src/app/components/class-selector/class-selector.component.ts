import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.css']
})
export class ClassSelectorComponent implements OnInit {
  public code: string;

  constructor() {
    this.code =
      `@Component({
      selector: '.app-class-selector',
      templateUrl: './class-selector.component.html',
      styleUrls: ['./class-selector.component.css']
    })`;
  }

  ngOnInit() {
  }

}
