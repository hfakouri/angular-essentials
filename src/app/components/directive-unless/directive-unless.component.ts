import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-unless',
  templateUrl: './directive-unless.component.html',
  styleUrls: ['./directive-unless.component.css']
})
export class DirectiveUnlessComponent implements OnInit {
  public hideParagraph: boolean;

  constructor() { }

  ngOnInit() {
    this.hideParagraph = true;
  }

}
