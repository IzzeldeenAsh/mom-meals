import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryPreferencesComponent } from './dietary-preferences.component';

describe('DietaryPreferencesComponent', () => {
  let component: DietaryPreferencesComponent;
  let fixture: ComponentFixture<DietaryPreferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietaryPreferencesComponent]
    });
    fixture = TestBed.createComponent(DietaryPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
