import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-directive',
  templateUrl: './ngswitch-directive.component.html',
  styleUrls: ['./ngswitch-directive.component.css']
})
export class NgswitchDirectiveComponent implements OnInit {
  public value: number;

  constructor() { }

  ngOnInit() {
    this.value = 5;
  }

}
