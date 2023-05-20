import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoosingMealsRoutingModule } from './choosing-meals-routing.module';
import { ChooseYourMealComponent } from './choose-your-meal/choose-your-meal.component';
import { MealsNavComponent } from './meals-nav/meals-nav.component';
import { CoreModule } from 'src/app/core/core.module';
import { MealsHeroComponent } from './meals-hero/meals-hero.component';
import { MealsMenuComponent } from './meals-menu/meals-menu.component';
import { MealsQuestionsComponent } from './meals-questions/meals-questions.component';

@NgModule({
  declarations: [ChooseYourMealComponent, MealsNavComponent, MealsHeroComponent, MealsMenuComponent, MealsQuestionsComponent],
  imports: [CommonModule, CoreModule, ChoosingMealsRoutingModule],
})
export class ChoosingMealsModule {}
