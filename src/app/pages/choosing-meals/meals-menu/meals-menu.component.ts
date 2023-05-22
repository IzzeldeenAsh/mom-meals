import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals-menu',
  templateUrl: './meals-menu.component.html',
  styleUrls: ['./meals-menu.component.scss'],
})
export class MealsMenuComponent {
  constructor(private router: Router) {}
  mealData = [
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
    {
      id: 1,
      mealImage: 'assets/img/meal/meal-1.jpg',
      listImg: 'assets/img/meal/list/meal-1.jpg',
    },
  ];

  toDetails(number: any) {
    this.router.navigateByUrl('/choose-meals/meal-details/1');
  }
}
