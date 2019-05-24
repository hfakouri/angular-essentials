import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-databinding',
  templateUrl: './output-databinding.component.html',
  styleUrls: ['./output-databinding.component.css']
})
export class OutputDatabindingComponent implements OnInit {
  @Output('theFruitAdded') fruitAdded = new EventEmitter<string>();
  public fruitName: string;

  constructor() { }

  ngOnInit() {
  }

  onAddFruit() {
    this.fruitAdded.emit(this.fruitName);
  }
}
