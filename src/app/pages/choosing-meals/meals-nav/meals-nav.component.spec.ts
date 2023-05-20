import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsNavComponent } from './meals-nav.component';

describe('MealsNavComponent', () => {
  let component: MealsNavComponent;
  let fixture: ComponentFixture<MealsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsNavComponent]
    });
    fixture = TestBed.createComponent(MealsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
