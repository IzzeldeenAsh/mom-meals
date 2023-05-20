import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsMenuComponent } from './meals-menu.component';

describe('MealsMenuComponent', () => {
  let component: MealsMenuComponent;
  let fixture: ComponentFixture<MealsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsMenuComponent]
    });
    fixture = TestBed.createComponent(MealsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
