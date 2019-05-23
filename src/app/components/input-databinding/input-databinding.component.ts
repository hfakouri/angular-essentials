import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-databinding',
  templateUrl: './input-databinding.component.html',
  styleUrls: ['./input-databinding.component.css']
})
export class InputDatabindingComponent implements OnInit {
  @Input('thecar') car: string;

  constructor() { }

  ngOnInit() {
  }

}
