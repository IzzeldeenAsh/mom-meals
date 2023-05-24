import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoosingMealsRoutingModule } from './choosing-meals-routing.module';
import { ChooseYourMealComponent } from './choose-your-meal/choose-your-meal.component';
import { MealsNavComponent } from './meals-nav/meals-nav.component';
import { CoreModule } from 'src/app/core/core.module';
import { MealsHeroComponent } from './meals-hero/meals-hero.component';
import { MealsMenuComponent } from './meals-menu/meals-menu.component';
import { MealsQuestionsComponent } from './meals-questions/meals-questions.component';
import { RouterModule } from '@angular/router';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { JoyrideModule } from 'ngx-joyride';
@NgModule({
  declarations: [
    ChooseYourMealComponent,
    MealsNavComponent,
    MealsHeroComponent,
    MealsMenuComponent,
    MealsQuestionsComponent,
    MealDetailsComponent,
    MealsListComponent,
  ],
  imports: [
    CommonModule,
    JoyrideModule.forRoot(),
    CoreModule,
    ChoosingMealsRoutingModule,
    RouterModule,
  ],
})
export class ChoosingMealsModule {}
