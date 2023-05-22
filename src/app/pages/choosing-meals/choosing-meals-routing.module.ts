import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseYourMealComponent } from './choose-your-meal/choose-your-meal.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealsListComponent } from './meals-list/meals-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'choose',
    pathMatch: 'full',
  },
  {
    path: 'choose',
    component: ChooseYourMealComponent,
    children: [
      {
        path: '',
        redirectTo: 'meals-list',
        pathMatch: 'full',
      },
      {
        path: 'meals-list',
        component: MealsListComponent,
      },
      {
        path: 'meal-details/:id',
        component: MealDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosingMealsRoutingModule {}
