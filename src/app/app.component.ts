import { Component, ViewEncapsulation } from '@angular/core';
import { VERSION } from 'src/environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Essentials';
  version = VERSION;

  constructor() { }
}
