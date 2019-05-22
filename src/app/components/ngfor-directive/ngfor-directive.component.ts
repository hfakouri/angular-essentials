import { Component, OnInit } from '@angular/core';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {
  public alerts = [];
  public alertText: string;

  constructor() {
    this.alertText = 'This is an alert!';
  }

  ngOnInit() {
  }

  onClick() {
    this.alerts.push(this.alertText);
  }
}
