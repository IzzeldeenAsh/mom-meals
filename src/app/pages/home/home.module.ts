import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { MealBenefitComponent } from './home/meal-benefit/meal-benefit.component';
import { CommonQuestionsComponent } from './home/common-questions/common-questions.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    MealBenefitComponent,
    CommonQuestionsComponent,
  ],
  imports: [CommonModule, CoreModule, HomeRoutingModule],
})
export class HomeModule {}
