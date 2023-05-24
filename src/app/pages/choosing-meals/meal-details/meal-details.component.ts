import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss'],
})
export class MealDetailsComponent {
  buttonLabel: string = 'Add to Cart';
  isAdded: boolean = false;

  addToCart() {
    this.isAdded = true;
    this.buttonLabel = 'Added';
  }
}
