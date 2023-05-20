import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseYourMealComponent } from './choose-your-meal/choose-your-meal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'choose',
    pathMatch: 'full',
  },
  {
    path: 'choose',
    component: ChooseYourMealComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosingMealsRoutingModule {}
