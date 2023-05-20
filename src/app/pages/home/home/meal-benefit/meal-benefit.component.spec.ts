import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealBenefitComponent } from './meal-benefit.component';

describe('MealBenefitComponent', () => {
  let component: MealBenefitComponent;
  let fixture: ComponentFixture<MealBenefitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealBenefitComponent]
    });
    fixture = TestBed.createComponent(MealBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
