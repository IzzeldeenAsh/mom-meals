import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-benefit',
  templateUrl: './meal-benefit.component.html',
  styleUrls: ['./meal-benefit.component.scss'],
})
export class MealBenefitComponent {
  benefirNumber: number = 1;
  active: string = 'ACTIVE';
  benefit1: boolean = false;
  toggleArrow: boolean = false;
  showBenefit1() {
    this.benefirNumber = 2;
    this.active = 'INACTIVE';
    this.benefit1 = true;
    this.toggleArrow = !this.toggleArrow;
  }
  showBenefit2() {
    this.benefirNumber = 1;
    this.active = 'ACTIVE';
    this.benefit1 = false;
    this.toggleArrow = !this.toggleArrow;
  }
}
