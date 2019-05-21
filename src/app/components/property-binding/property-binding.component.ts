import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  public cssClass: string = "card-text text-monospace";
  public code: string;

  constructor() {
    this.code = `<p [class]="cssClass">`;
  }

  ngOnInit() {
  }

}
