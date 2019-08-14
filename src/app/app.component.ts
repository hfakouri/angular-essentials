import { Component, ViewEncapsulation, VERSION } from '@angular/core';
import { APP_VERSION } from 'src/environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Essentials';
  appVersion = APP_VERSION;
  angularVersion: string = VERSION.full;

  constructor() { }
}
