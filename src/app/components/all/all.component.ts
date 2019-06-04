import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent {
  title = 'Angular Essentials';
  vehicles = ['Honda Civic', 'Honda CRV', 'Subaru Forester'];
  fruits = [];

  onFruitAdded(fruit: string) {
    this.fruits.push(fruit);
  }
}
