import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals-menu',
  templateUrl: './meals-menu.component.html',
  styleUrls: ['./meals-menu.component.scss'],
})
export class MealsMenuComponent {
  mealDataCounter!: any[];
  constructor(private router: Router) {}
  mealData = [
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
      inCart: false,
      count: 1,
    },
  ];
  addToCart(meal: any) {
    meal.inCart = true;
  }

  increment(meal: any) {
    meal.count++;
  }

  decrement(meal: any) {
    if (meal.count > 1) {
      meal.count--;
    } else {
      meal.inCart = false;
    }
  }
  toDetails(number: any) {
    this.router.navigateByUrl('/choose-meals/meal-details/1');
  }
}
