import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { PersonalDetailsComponent } from './account-overview/personal-details/personal-details.component';
import { DeliveryInfoComponent } from './account-overview/delivery-info/delivery-info.component';
import { BenefitDetailsComponent } from './account-overview/benefit-details/benefit-details.component';
import { DietaryPreferencesComponent } from './account-overview/dietary-preferences/dietary-preferences.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    component: AccountOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal-details',
        pathMatch: 'full',
      },
      {
        path: 'personal-details',
        component: PersonalDetailsComponent,
      },
      {
        path: 'delivery-info',
        component: DeliveryInfoComponent,
      },
      {
        path: 'benefit-details',
        component: BenefitDetailsComponent,
      },
      {
        path: 'dietary-preferences',
        component: DietaryPreferencesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountOverviewRoutingModule {}
