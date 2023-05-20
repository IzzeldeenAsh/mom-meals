import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsQuestionsComponent } from './meals-questions.component';

describe('MealsQuestionsComponent', () => {
  let component: MealsQuestionsComponent;
  let fixture: ComponentFixture<MealsQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsQuestionsComponent]
    });
    fixture = TestBed.createComponent(MealsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
