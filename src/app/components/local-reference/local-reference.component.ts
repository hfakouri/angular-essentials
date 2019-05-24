import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent implements OnInit {
  public inputData: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(myInput: HTMLInputElement) {
    this.inputData = myInput.value;
  }
}
