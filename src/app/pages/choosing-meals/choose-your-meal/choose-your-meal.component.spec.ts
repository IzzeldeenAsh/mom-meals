import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourMealComponent } from './choose-your-meal.component';

describe('ChooseYourMealComponent', () => {
  let component: ChooseYourMealComponent;
  let fixture: ComponentFixture<ChooseYourMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseYourMealComponent]
    });
    fixture = TestBed.createComponent(ChooseYourMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
