import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-else-directive',
  templateUrl: './ngif-else-directive.component.html',
  styleUrls: ['./ngif-else-directive.component.css']
})
export class NgifElseDirectiveComponent implements OnInit {
  public clickCount: number;

  constructor() {
    this.clickCount = 0;
  }

  ngOnInit() {
  }

  onClick() {
    this.clickCount++;
  }

  isEven() {
    if (this.clickCount % 2 === 0) {
      return true;
    }

    return false;
  }
}
