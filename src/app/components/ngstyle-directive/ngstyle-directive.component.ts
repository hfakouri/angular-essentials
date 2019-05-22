import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.css']
})
export class NgstyleDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    return 'bold';
  }
}
