import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsHeroComponent } from './meals-hero.component';

describe('MealsHeroComponent', () => {
  let component: MealsHeroComponent;
  let fixture: ComponentFixture<MealsHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsHeroComponent]
    });
    fixture = TestBed.createComponent(MealsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
