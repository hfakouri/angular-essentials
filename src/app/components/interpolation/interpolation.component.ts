import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public title: string;
  public code: string;
  public someNumber: number = 134;

  constructor() {
    this.title = "Interpolation";
    this.code = "{{title}}";
  }

  ngOnInit() {
  }

  getSomeString() {
    return 'Some string...';
  }

}
