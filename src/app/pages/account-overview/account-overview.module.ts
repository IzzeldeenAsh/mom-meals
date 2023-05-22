import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOverviewRoutingModule } from './account-overview-routing.module';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { PersonalDetailsComponent } from './account-overview/personal-details/personal-details.component';
import { DeliveryInfoComponent } from './account-overview/delivery-info/delivery-info.component';
import { BenefitDetailsComponent } from './account-overview/benefit-details/benefit-details.component';
import { DietaryPreferencesComponent } from './account-overview/dietary-preferences/dietary-preferences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AccountOverviewComponent,
    PersonalDetailsComponent,
    DeliveryInfoComponent,
    BenefitDetailsComponent,
    DietaryPreferencesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CoreModule,
    AccountOverviewRoutingModule,
  ],
})
export class AccountOverviewModule {}
