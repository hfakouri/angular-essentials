import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],

  // ViewEncapsulation.None - No Shadow DOM at all. Therefore, also no style encapsulation.
  // ViewEncapsulation.Emulated - (Default) No Shadow DOM but style encapsulation emulation.
  // ViewEncapsulation.ShadowDom - Shadow Dom with all it’s goodness.
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
