import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOverviewComponent } from './account-overview.component';

describe('AccountOverviewComponent', () => {
  let component: AccountOverviewComponent;
  let fixture: ComponentFixture<AccountOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountOverviewComponent]
    });
    fixture = TestBed.createComponent(AccountOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
