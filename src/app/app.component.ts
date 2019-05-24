import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Essentials';
  vehicles = ['Honda Civic', 'Honda CRV', 'Subaru Forester'];
  fruits = [];

  onFruitAdded(fruit: string) {
    this.fruits.push(fruit);
  }
}
