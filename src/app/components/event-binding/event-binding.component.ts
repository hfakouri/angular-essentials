import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public clickCount: number;

  constructor() {
    this.clickCount = 0;
  }

  ngOnInit() {
  }

  onClick() {
    this.clickCount++;
  }
}
